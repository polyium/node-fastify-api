/**
 * Supported HTTP method identifiers.
 *
 * Each enum member name is the internal TypeScript key used by the schema
 * package, and each value is the serialized HTTP method string.
 */
export enum Methods {
    get = "get",
    post = "post",
    put = "put",
    head = "head",
    delete = "delete",
    options = "options",
    trace = "trace",
    copy = "copy",
    lock = "lock",
    mkcol = "mkcol",
    move = "move",
    purge = "purge",
    propfind = "propfind",
    proppatch = "proppatch",
    unlock = "unlock",
    report = "report",
    mkactivity = "mkactivity",
    checkout = "checkout",
    merge = "merge",
    m = "m-search",
    notify = "notify",
    subscribe = "subscribe",
    unsubscribe = "unsubscribe",
    patch = "patch",
    search = "search",
    connect = "connect"
}

/**
 * A valid key from the {@link Methods} enum.
 */
type Key = keyof typeof Methods;

/**
 * Wraps an HTTP method enum key and exposes normalized string representations.
 */
class Method {
    /**
     * Creates an HTTP method wrapper.
     *
     * @param $ - The key of the HTTP method in the {@link Methods} enum.
     */
    constructor(
        private readonly $: Key
    ) {}

    /**
     * The enum key used to look up the HTTP method value.
     *
     * @returns The selected {@link Methods} enum key.
     */
    private get key(): Key {
        return this.$;
    }

    /**
     * The serialized HTTP method value.
     *
     * @returns The HTTP method string associated with the selected enum key.
     */
    private get value(): string {
        return Methods[this.key];
    }

    /**
     * The uppercase string representation of the HTTP method.
     *
     * @returns The HTTP method value converted to uppercase.
     */
    get uppercase(): string {
        return this.value.toUpperCase();
    }

    /**
     * The lowercase string representation of the HTTP method.
     *
     * @returns The HTTP method value converted to lowercase.
     */
    get lowercase(): string {
        return this.value.toLowerCase();
    }

    /**
     * The string representation of the HTTP method.
     *
     * @returns The serialized HTTP method value.
     */
    public get string(): string {
        return this.value;
    }
}
