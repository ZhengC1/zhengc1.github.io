const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.aP-eA4Fa.js",app:"_app/immutable/entry/app.BC9am6bU.js",imports:["_app/immutable/entry/start.aP-eA4Fa.js","_app/immutable/chunks/D1NcSb41.js","_app/immutable/chunks/DksNDN9K.js","_app/immutable/chunks/DDwUCpE2.js","_app/immutable/entry/app.BC9am6bU.js","_app/immutable/chunks/DksNDN9K.js","_app/immutable/chunks/CmtZm_Nd.js","_app/immutable/chunks/GArNo92p.js","_app/immutable/chunks/D9N8xoOR.js","_app/immutable/chunks/DDwUCpE2.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-D1VyiVWS.js')),
			__memo(() => import('./chunks/1-LoZOnEjc.js')),
			__memo(() => import('./chunks/2-BO2KAvXf.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
