export const getCache =(key)=>{
  return JSON.parse(localStorage.getItem(key));
}
export const setCache =(key, value)=>{
  localStorage.setItem(key, value);
}
export const deleteCache =(key)=>{
  localStorage.removeItem(key);
}