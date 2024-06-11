export default function back(){
    return (
        <button onClick={getApi}> Call API </button>
    )
}

function api(){
    const res = await fetch("https://127.0.0.1:3000/api/hello")
    const data = res.json()
    console.log(data);
}
