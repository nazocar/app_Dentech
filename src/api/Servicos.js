// Classes com as propriedades e métodos para lidar com os dados dos serviços.

// URL para realizar as interações com a API
const url = "https://dentech-api.vercel.app"

export default class Servicos {

    async buscar (id = '', token) {
        try {

            const req = await fetch(`${url}/servicos?id=${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                }
            });

            const res = await req.json();

            return res;
            
        } catch (error) {
            console.log(error);
            return false;
        }
    };

}