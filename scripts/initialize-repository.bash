#!/usr/bin/env bash

# -*-  Coding: UTF-8  -*- #
# -*-  System: Linux  -*- #
# -*-  Usage:   *.*   -*- #

#
# Shellcheck Ignore List
#
# shellcheck disable=SC1073
# shellcheck disable=SC2120
# shellcheck disable=SC2071
# shellcheck disable=SC2086
#

# Ensure to run shellcheck upon change(s).

#
# set -o verbose     ::: Print shell input upon read.
# set -o allexport   ::: Export all variable(s) + function(s) to environment.
# set -o errexit     ::: Exit immediately upon pipeline'd failure.
# set -o monitor     ::: Output process-separated command(s).
# set -o privileged  ::: Ignore externals - ensures of pristine run environment.
# set -o xtrace      ::: Print a trace of simple commands.
# set -o braceexpand ::: Enable brace expansion. Enabled by default.
# set -o no-exec     ::: Bash syntax debugging; reads in commands but does not execute them.
# set -o pipefail    ::: Ensures the pipeline return value is that of the last command to exit.
# set -o history     ::: Enable the use of history for the given script.
#

# 127 - Executable not found.

set -o posix
set -o errexit
set -o errtrace
set -o pipefail
set -o functrace

# The git repository's root directory.
function gwd() {
    printf "%s" "$(git rev-parse --show-toplevel || pwd)"

    return 0
}

# Current working directory of the caller's shell process.
function cwd() {
    pwd

    return 0
}

# The basename of the full-system path pointed at the root of the git
# repository.
function name() {
    basename "$(gwd)"
}

# Write the relative caller's function-name to standard-output.
function caller() {
    printf "%s" "${FUNCNAME[1]}"

    return 0
}

function log() {
    printf "%s\n" "${1:-"N/A"}" >> /dev/stderr

    return 0
}

# Initialize a node, npm package while bootstrapping typical
# project requirements.
function main() {
    # Add the git repository's path to the directory
    # stack. Run "dirs" or read "${DIRSTACK}" to debug.
    pushd "$(gwd)" >> /dev/null

    # Debug runtime and input.
    log "[trace] (main): Repository: \"$(gwd)\""

    log "[trace] (main): Checking installation dependencies ..."

    # Check if "gh" is installed.
    if ! [[ $(command -v "gh") ]]; then
        log "[error] (main): \"gh\" system executable not found."
        return 127
    fi

    # Check if "jq" is installed.
    if ! [[ $(command -v "jq") ]]; then
        log "[error] (main): \"jq\" system executable not found."
        return 127
    fi

    # Ensure session is valid.
    if [[ $(gh auth status --active --show-token) ]]; then
        log "[debug] (main): Verified the active github session."
    fi

    # Conditionally create the github repository.
    if ! [[ $(gh repo view "polyium/$(name)") ]]; then
        log "[notice] (main): Creating repository \"@polyium/$(name)\" ..."

        gh repo create "polyium/$(name)" --public --disable-issues --disable-wiki --license MIT
    fi

    # Create any packages that don't already exist.
    npm init --scope "@polyium" --init-license "MIT" --init-author-url "https://github.com/Segmentational" --init-version "0.0.0" --private "true" --yes >> /dev/null

    # Update boilerplate.
    cat package.json | jq ".name = \"@polyium/$(name)\" | .private = true | .description = \"...\" | .type = \"module\" | del(.main)" > package.json

    npm install --save-dev "jest" "ts-jest" "typescript"

    npm install --save-dev "@jest/globals" "@jest/types" "@types/jest" "@types/node"

    npm install --save-dev "eslint" "typescript-eslint" "eslint-plugin-import" "globals"

    npm install --save-prod "fastify"

    npm install --save-dev "@types/fastify"

    return 0
}

main "${@}"
