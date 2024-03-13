const content = (data)=>{
    document.getElementById('parent-box').innerHTML=''
    data.map((ele)=>{
       
        let title  = document.createElement("h1")
        title.innerHTML=ele.title
        title.setAttribute("class","title")
        let createdby  = document.createElement("h1")
        createdby.innerHTML=ele.createdby
        createdby.setAttribute("class","title")
        let body  = document.createElement("h1")
        body.innerHTML=ele.body
        body.setAttribute("class","title")
        let active  = document.createElement("h1")
        active.innerHTML=ele.active
        active.setAttribute("class","title")
        let list = document.createElement('div')
        list.setAttribute("class","list")
        list.append(title,createdby,body,active)
        list.addEventListener("click",()=>{
            window.location.href=`/blog/singleBlog/${ele._id}`
        })
        document.getElementById("parent-box").append(list)
    })
}

fetch("http://localhost:8090/blog/blogs")
.then((data)=>data.json())
.then((json)=>content(json))