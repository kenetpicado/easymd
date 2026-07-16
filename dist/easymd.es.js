import { createElementBlock as e, createElementVNode as t, openBlock as n } from "vue";
//#region \0plugin-vue:export-helper
var r = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, i = {}, a = { class: "flex items-center" };
function o(r, i) {
	return n(), e("div", a, [...i[0] ||= [t("div", { class: "loading loading-spinner mx-auto" }, null, -1)]]);
}
var s = /*#__PURE__*/ r(i, [["render", o]]);
//#endregion
export { s as TheLoader };
