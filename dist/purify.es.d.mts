/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */

/**
 * Configuration to control DOMPurify behavior.
 */
interface Config {
    /**
     * Extend the existing array of allowed attributes.
     */
    ADD_ATTR?: string[] | undefined;
    /**
     * Extend the existing array of elements that can use Data URIs.
     */
    ADD_DATA_URI_TAGS?: string[] | undefined;
    /**
     * Extend the existing array of allowed tags.
     */
    ADD_TAGS?: string[] | undefined;
    /**
     * Extend the existing array of elements that are safe for URI-like values (be careful, XSS risk).
     */
    ADD_URI_SAFE_ATTR?: string[] | undefined;
    /**
     * Allow ARIA attributes, leave other safe HTML as is (default is true).
     */
    ALLOW_ARIA_ATTR?: boolean | undefined;
    /**
     * Allow HTML5 data attributes, leave other safe HTML as is (default is true).
     */
    ALLOW_DATA_ATTR?: boolean | undefined;
    /**
     * Allow external protocol handlers in URL attributes (default is false, be careful, XSS risk).
     * By default only `http`, `https`, `ftp`, `ftps`, `tel`, `mailto`, `callto`, `sms`, `cid` and `xmpp` are allowed.
     */
    ALLOW_UNKNOWN_PROTOCOLS?: boolean | undefined;
    /**
     * Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0.
     */
    ALLOW_SELF_CLOSE_IN_ATTR?: boolean | undefined;
    /**
     * Allow only specific attributes.
     */
    ALLOWED_ATTR?: string[] | undefined;
    /**
     * Allow only specific elements.
     */
    ALLOWED_TAGS?: string[] | undefined;
    /**
     * Allow only specific namespaces. Defaults to:
     *  - `http://www.w3.org/1999/xhtml`
     *  - `http://www.w3.org/2000/svg`
     *  - `http://www.w3.org/1998/Math/MathML`
     */
    ALLOWED_NAMESPACES?: string[] | undefined;
    /**
     * Allow specific protocols handlers in URL attributes via regex (be careful, XSS risk).
     * Default RegExp:
     * ```
     * /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i;
     * ```
     */
    ALLOWED_URI_REGEXP?: RegExp | undefined;
    /**
     * Define how custom elements are handled.
     */
    CUSTOM_ELEMENT_HANDLING?: {
        /**
         * Regular expression or function to match to allowed elements.
         * Default is null (disallow any custom elements).
         */
        tagNameCheck?: RegExp | ((tagName: string) => boolean) | null | undefined;
        /**
         * Regular expression or function to match to allowed attributes.
         * Default is null (disallow any attributes not on the allow list).
         */
        attributeNameCheck?: RegExp | ((attributeName: string) => boolean) | null | undefined;
        /**
         * Allow custom elements derived from built-ins if they pass `tagNameCheck`. Default is false.
         */
        allowCustomizedBuiltInElements?: boolean | undefined;
    };
    /**
     * Add attributes to block-list.
     */
    FORBID_ATTR?: string[] | undefined;
    /**
     * Add child elements to be removed when their parent is removed.
     */
    FORBID_CONTENTS?: string[] | undefined;
    /**
     * Add elements to block-list.
     */
    FORBID_TAGS?: string[] | undefined;
    /**
     * Glue elements like style, script or others to `document.body` and prevent unintuitive browser behavior in several edge-cases (default is false).
     */
    FORCE_BODY?: boolean | undefined;
    /**
     * Map of non-standard HTML element names to support. Map to true to enable support. For example:
     *
     * ```
     * HTML_INTEGRATION_POINTS: { foreignobject: true }
     * ```
     */
    HTML_INTEGRATION_POINTS?: Record<string, boolean> | undefined;
    /**
     * Sanitize a node "in place", which is much faster depending on how you use DOMPurify.
     */
    IN_PLACE?: boolean | undefined;
    /**
     * Keep an element's content when the element is removed (default is true).
     */
    KEEP_CONTENT?: boolean | undefined;
    /**
     * Map of MathML element names to support. Map to true to enable support. For example:
     *
     * ```
     * MATHML_TEXT_INTEGRATION_POINTS: { mtext: true }
     * ```
     */
    MATHML_TEXT_INTEGRATION_POINTS?: Record<string, boolean> | undefined;
    /**
     * Change the default namespace from HTML to something different.
     */
    NAMESPACE?: string | undefined;
    /**
     * Change the parser type so sanitized data is treated as XML and not as HTML, which is the default.
     */
    PARSER_MEDIA_TYPE?: DOMParserSupportedType | undefined;
    /**
     * Return a DOM `DocumentFragment` instead of an HTML string (default is false).
     */
    RETURN_DOM_FRAGMENT?: boolean | undefined;
    /**
     * Return a DOM `HTMLBodyElement` instead of an HTML string (default is false).
     */
    RETURN_DOM?: boolean | undefined;
    /**
     * Return a TrustedHTML object instead of a string if possible.
     */
    RETURN_TRUSTED_TYPE?: boolean | undefined;
    /**
     * Strip `{{ ... }}`, `${ ... }` and `<% ... %>` to make output safe for template systems.
     * Be careful please, this mode is not recommended for production usage.
     * Allowing template parsing in user-controlled HTML is not advised at all.
     * Only use this mode if there is really no alternative.
     */
    SAFE_FOR_TEMPLATES?: boolean | undefined;
    /**
     * Change how e.g. comments containing risky HTML characters are treated.
     * Be very careful, this setting should only be set to `false` if you really only handle
     * HTML and nothing else, no SVG, MathML or the like.
     * Otherwise, changing from `true` to `false` will lead to XSS in this or some other way.
     */
    SAFE_FOR_XML?: boolean | undefined;
    /**
     * Use DOM Clobbering protection on output (default is true, handle with care, minor XSS risks here).
     */
    SANITIZE_DOM?: boolean | undefined;
    /**
     * Enforce strict DOM Clobbering protection via namespace isolation (default is false).
     * When enabled, isolates the namespace of named properties (i.e., `id` and `name` attributes)
     * from JS variables by prefixing them with the string `user-content-`
     */
    SANITIZE_NAMED_PROPS?: boolean | undefined;
    /**
     * Supplied policy must define `createHTML` and `createScriptURL`.
     */
    TRUSTED_TYPES_POLICY?: TrustedTypePolicy | undefined;
    /**
     * Controls categories of allowed elements.
     *
     * Note that the `USE_PROFILES` setting will override the `ALLOWED_TAGS` setting
     * so don't use them together.
     */
    USE_PROFILES?: false | UseProfilesConfig | undefined;
    /**
     * Return entire document including <html> tags (default is false).
     */
    WHOLE_DOCUMENT?: boolean | undefined;
}
/**
 * Defines categories of allowed elements.
 */
interface UseProfilesConfig {
    /**
     * Allow all safe MathML elements.
     */
    mathMl?: boolean | undefined;
    /**
     * Allow all safe SVG elements.
     */
    svg?: boolean | undefined;
    /**
     * Allow all save SVG Filters.
     */
    svgFilters?: boolean | undefined;
    /**
     * Allow all safe HTML elements.
     */
    html?: boolean | undefined;
}

declare const _default: DOMPurify;

interface DOMPurify {
    /**
     * Creates a DOMPurify instance using the given window-like object.
     */
    (root: WindowLike): DOMPurify;
    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    version: string;
    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    removed: Array<RemovedElement | RemovedAttribute>;
    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    isSupported: boolean;
    /**
     * Set the configuration once.
     *
     * @param {Config} cfg configuration object
     * @returns {void}
     */
    setConfig(cfg?: Config): void;
    /**
     * Removes the configuration.
     */
    clearConfig(): void;
    /**
     * Provides core sanitation functionality.
     *
     * @param {string | Node} dirty string or DOM node
     * @param {Config & { RETURN_TRUSTED_TYPE: true }} cfg object
     * @returns {TrustedHTML} Sanitized TrustedHTML.
     */
    sanitize(dirty: string | Node, cfg: Config & {
        RETURN_TRUSTED_TYPE: true;
    }): TrustedHTML;
    /**
     * Provides core sanitation functionality.
     *
     * @param {Node} dirty DOM node
     * @param {Config & { IN_PLACE: true }} cfg object
     * @returns {Node} Sanitized DOM node.
     */
    sanitize(dirty: Node, cfg: Config & {
        IN_PLACE: true;
    }): Node;
    /**
     * Provides core sanitation functionality.
     *
     * @param {string | Node} dirty string or DOM node
     * @param {Config & { RETURN_DOM: true }} cfg object
     * @returns {Node} Sanitized DOM node.
     */
    sanitize(dirty: string | Node, cfg: Config & {
        RETURN_DOM: true;
    }): Node;
    /**
     * Provides core sanitation functionality.
     *
     * @param {string | Node} dirty string or DOM node
     * @param {Config & { RETURN_DOM_FRAGMENT: true }} cfg object
     * @returns {DocumentFragment} Sanitized document fragment.
     */
    sanitize(dirty: string | Node, cfg: Config & {
        RETURN_DOM_FRAGMENT: true;
    }): DocumentFragment;
    /**
     * Provides core sanitation functionality.
     *
     * @param {string | Node} dirty string or DOM node
     * @param {Config} cfg object
     * @returns {string} Sanitized string.
     */
    sanitize(dirty: string | Node, cfg?: Config): string;
    /**
     * Checks if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     *
     * @param {string} tag Tag name of containing element.
     * @param {string} attr Attribute name.
     * @param {string} value Attribute value.
     * @returns {boolean} Returns true if `value` is valid. Otherwise, returns false.
     */
    isValidAttribute(tag: string, attr: string, value: string): boolean;
    /**
     * Adds a DOMPurify hook.
     *
     * @param {BasicHookName} entryPoint entry point for the hook to add
     * @param {Hook} hookFunction function to execute
     * @returns {void}
     */
    addHook(entryPoint: BasicHookName, hookFunction: Hook): void;
    /**
     * Adds a DOMPurify hook.
     *
     * @param {'uponSanitizeElement'} entryPoint entry point for the hook to add
     * @param {UponSanitizeElementHook} hookFunction function to execute
     * @returns {void}
     */
    addHook(entryPoint: 'uponSanitizeElement', hookFunction: UponSanitizeElementHook): void;
    /**
     * Adds a DOMPurify hook.
     *
     * @param {'uponSanitizeAttribute'} entryPoint entry point for the hook to add
     * @param {UponSanitizeAttributeHook} hookFunction function to execute
     * @returns {void}
     */
    addHook(entryPoint: 'uponSanitizeAttribute', hookFunction: UponSanitizeAttributeHook): void;
    /**
     * Remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {BasicHookName} entryPoint entry point for the hook to remove
     * @returns {Hook | undefined} removed(popped) hook
     */
    removeHook(entryPoint: BasicHookName): Hook | undefined;
    /**
     * Remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {'uponSanitizeElement'} entryPoint entry point for the hook to remove
     * @returns {UponSanitizeElementHook | undefined} removed(popped) hook
     */
    removeHook(entryPoint: 'uponSanitizeElement'): UponSanitizeElementHook | undefined;
    /**
     * Remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {'uponSanitizeAttribute'} entryPoint entry point for the hook to remove
     * @returns {UponSanitizeAttributeHook | undefined} removed(popped) hook
     */
    removeHook(entryPoint: 'uponSanitizeAttribute'): UponSanitizeAttributeHook | undefined;
    /**
     * Removes all DOMPurify hooks at a given entryPoint
     *
     * @param {HookName} entryPoint entry point for the hooks to remove
     * @returns {void}
     */
    removeHooks(entryPoint: HookName): void;
    /**
     * Removes all DOMPurify hooks.
     *
     * @returns {void}
     */
    removeAllHooks(): void;
}
/**
 * An element removed by DOMPurify.
 */
interface RemovedElement {
    /**
     * The element that was removed.
     */
    element: Node;
}
/**
 * An element removed by DOMPurify.
 */
interface RemovedAttribute {
    /**
     * The attribute that was removed.
     */
    attribute: Attr | null;
    /**
     * The element that the attribute was removed.
     */
    from: Node;
}
type BasicHookName = 'beforeSanitizeElements' | 'afterSanitizeElements' | 'beforeSanitizeAttributes' | 'afterSanitizeAttributes' | 'beforeSanitizeShadowDOM' | 'uponSanitizeShadowNode' | 'afterSanitizeShadowDOM';
type UponSanitizeElementHookName = 'uponSanitizeElement';
type UponSanitizeAttributeHookName = 'uponSanitizeAttribute';
type HookName = BasicHookName | UponSanitizeElementHookName | UponSanitizeAttributeHookName;
type Hook = (this: DOMPurify, currentNode: Node, hookEvent: null, config: Config) => void;
type UponSanitizeElementHook = (this: DOMPurify, currentNode: Node, hookEvent: UponSanitizeElementHookEvent, config: Config) => void;
type UponSanitizeAttributeHook = (this: DOMPurify, currentNode: Node, hookEvent: UponSanitizeAttributeHookEvent, config: Config) => void;
interface UponSanitizeElementHookEvent {
    tagName: string;
    allowedTags: Record<string, boolean>;
}
interface UponSanitizeAttributeHookEvent {
    attrName: string;
    attrValue: string;
    keepAttr: boolean;
    allowedAttributes: Record<string, boolean>;
    forceKeepAttr: boolean | undefined;
}
/**
 * A `Window`-like object containing the properties and types that DOMPurify requires.
 */
type WindowLike = Pick<typeof globalThis, 'DocumentFragment' | 'HTMLTemplateElement' | 'Node' | 'Element' | 'NodeFilter' | 'NamedNodeMap' | 'HTMLFormElement' | 'DOMParser'> & {
    document?: Document;
    MozNamedAttrMap?: typeof window.NamedNodeMap;
    trustedTypes?: typeof window.trustedTypes;
};

export { type Config, type Hook, type HookName, type RemovedAttribute, type RemovedElement, type UponSanitizeAttributeHook, type UponSanitizeAttributeHookEvent, type UponSanitizeElementHook, type UponSanitizeElementHookEvent, type WindowLike, _default as default };
