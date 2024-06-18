export function GET(request, { params }){
    return Response.json({
        name:"Noppadon",
        major:"IT",
        lv:"3",
        id: params.id
    })
}
