import { confirmShare } from "./modules/share.js";

window.getById = (id) => {
    return document.getElementById(id);
};

window.getByClass = (cls) => {
    return document.getElementsByClassName(cls);
};

window.query = (selector) => {
    return document.querySelector(selector);
};

window.queryAll = (selector) => {
    return document.querySelectorAll(selector);
};

alert('');
getById('share_abalos').attachEventListener('mouseup', (e) => {
    e.preventDefault();
    confirmShare();
});