const limit = 10 
const privateKey = "live_UOGW6djoO2HgdH01ILZUgv3NaPTialssJTbXCvqQ6CZ4liy3AZu2PWAYu24DExJp";
const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=beng&api_key=${privateKey}` ;


async function catApi (){
    const resource = await fetch(url); 
    const cats = await resource.json(); 
    console.log(cats)
}

catApi(); 

