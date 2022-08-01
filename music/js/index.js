let songs = []
let pagesNum = 1;
let baseUrl = "http://47.106.207.240:18123"

let Ajax = {
    get: function (url) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 304) {
                    console.log(xhr.responseText);

                }
            }
        }
        xhr.send();
    },

    post: function (url, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, false);

        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 304) {
                    callback(xhr)
                }
            }
        }
        xhr.send(data);
    }
};
// 查询歌词回调函数
callback1 = function (xhr) {
    let text = JSON.parse(xhr.responseText)
    songs = text.content
}
// 提交歌曲信息回调函数
callback2 = function (xhr) {
    alert("信息上传成功")
}

//根据页数加载歌曲列表
setPage = function (currentPage, song) {
    let totalSize = Math.ceil(song.length / 6)
    document.getElementById("totalPage").innerHTML = totalSize + ""
    document.getElementById("currentPage").innerHTML = currentPage
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = ""
    let tr = document.createElement('tr')
    tbody.appendChild(tr)
    let tdId = document.createElement("td")
    tdId.innerText = "序号"
    tr.appendChild(tdId)
    let tdName = document.createElement("td")
    tdName.innerHTML = "歌名"
    tr.appendChild(tdName)
    let tdSinger = document.createElement("td")
    tdSinger.innerHTML = "歌手"
    tr.appendChild(tdSinger)
    for (let i = (currentPage - 1) * 6; i < currentPage * 6 && i < song.length; i++) {
        let tr = document.createElement('tr')
        tbody.appendChild(tr)
        let tdId = document.createElement("td")
        tdId.innerText = song[i].songId
        tr.appendChild(tdId)
        let tdName = document.createElement("td")
        tdName.innerHTML = song[i].songName
        tr.appendChild(tdName)
        let tdSinger = document.createElement("td")
        tdSinger.innerHTML = song[i].songSinger
        tr.appendChild(tdSinger)
    }

}

getSongs = function () {
    setPage(pagesNum, songs)
}

tonext = function () {
    if (pagesNum == Math.ceil(songs.length / 6)) {
        alert("已经达到最大页")
        return
    }
    setPage(++pagesNum, songs)
}

toprev = function () {
    if (pagesNum == 1) {
        alert("已经达到最小页")
        return
    }
    setPage(--pagesNum, songs)
}

mysubmit = function () {
    let data = {
        'userName': 'tjj',
        'songId': songs.length + 1 + "",
        'songName': document.getElementById("songInfo").value,
        'songSinger': document.getElementById("singerInfo").value
    }
    Ajax.post(baseUrl + "/xspx/LZ/setSong", JSON.stringify(data), callback2)
    Ajax.post(baseUrl + "/xspx/LZ/getAllSong", {}, callback1)
}

window.onload = function () {
    Ajax.post(baseUrl + "/xspx/LZ/getAllSong", {}, callback1)
}