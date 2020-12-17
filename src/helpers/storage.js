import settings from '../setting/settings.json';

const localstorageSet = (user) => {
	localStorage.setItem(settings.store_token, user.accessToken);
	localStorage.setItem(settings.store_name, user.user);
}

const localstorageDel = () => {
	localStorage.removeItem(settings.store_token);
	localStorage.removeItem(settings.store_name);
}

const localstorageGetName = () => {
	let name = localStorage.getItem(settings.store_name);
	return name
}
const localstorageGet = () => {
	let token = localStorage.getItem(settings.store_token);
	let name = localStorage.getItem(settings.store_name);
	return (token && name)
}

export {
	localstorageSet,
	localstorageDel,
	localstorageGet,
	localstorageGetName
}
