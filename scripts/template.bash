#!/usr/bin/env bash

#
# -*-  Coding: UTF-8  -*- #
# -*-  System: Linux  -*- #
# -*-  Usage:   *.*   -*- #
#

# Author: Jacob Sanders (GitHub - Segmentational)

#
# Shellcheck Ignore List
#
# shellcheck disable=SC1073
# shellcheck disable=SC2120
# shellcheck disable=SC2071
# shellcheck disable=SC2086
# shellcheck disable=SC2086
#

#
# Bash Set-Options Reference
#

#
# 1.   set -o verbose     ::: Print shell input upon read.
# 2.   set -o allexport   ::: Export all variable(s) + function(s) to environment.
# 3.   set -o errexit     ::: Exit immediately upon pipeline'd failure.
# 4.   set -o monitor     ::: Output process-separated command(s).
# 5.   set -o privileged  ::: Ignore externals - ensures of pristine run environment.
# 6.   set -o xtrace      ::: Print a trace of simple commands.
# 7.   set -o braceexpand ::: Enable brace expansion. Enabled by default.
# 8.   set -o no-exec     ::: Bash syntax debugging; reads in commands but does not execute them.
# 9.   set -o pipefail    ::: Ensures the pipeline return value is that of the last command to exit.
# 10.  set -o history     ::: Enable the use of history for the given script.
#

set -euo pipefail # (0)
set -o xtrace # (6)

# Establish a virtual environment.
# python3 -m venv "$(git rev-parse --show-toplevel)/.venv"
# source $(git rev-parse --show-toplevel)/.venv/bin/activate