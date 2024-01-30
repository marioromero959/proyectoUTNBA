export const getData2 = async(limite) =>{
    const url =`https://jsonplaceholder.typicode.com/comments?_start=0&_limit=${limite}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}