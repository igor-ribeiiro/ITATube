document.getElementById("inputInfo").onkeydown = function (e) {
    if(e.keyCode === 13) {
        var input = document.getElementById('inputInfo').value;

        if(input==="10 Porcento" || input==="10 porcento")
            location.href = "pages/10_porcento.html";

        else if (input==="Amiga Parceira" || input==="Amiga parceira" || input==="amiga parceira" || input==="amiga Parceira")
            location.href="pages/amiga_parceira.html";

        else if (input ==="Baile de Favela" || input==="baile de favela")
            location.href="pages/baile_de_favela.html"

        else if (input ==="Bumbum Granada" || input==="bumbum granada")
            location.href="pages/bumbum_granada.html"

        else if (input ==="Chefe é chefe né Pai" || input==="chefe é chefe né pai" || input==="chefe e chefe ne pai")
            location.href="pages/chefe_e_chefe_ne_pai.html"

        else if (input ==="Devagarinho" || input==="devagarinho")
            location.href="pages/devagarinho.html"

        else if (input ==="Fetiche" || input==="fetiche")
            location.href="pages/fetiche.html"

        else if (input ==="Novinha vai no chão" || input==="novinha vai no chão" || input==="novinha vai no chao")
            location.href="pages/novinha_vai_no_chão.html"

        else if (input ==="Quando o DJ mandar" || input==="quando o DJ mandar" || input==="quando o dj mandar")
            location.href="pages/quando_o_DJ_mandar.html"

        else if(input==="Vem pro meu lounge" || input==="vem pro meu lounge")
            location.href="pages/vem_pro_meu_lounge.html"
        else
            location.href = "video_not_found.html";
    }
}

document.getElementById("search-icon").onclick = function () {
    var input = document.getElementById('inputInfo').value;

    if(input==="10 Porcento" || input==="10 porcento")
        location.href = "pages/10_porcento.html";

    else if (input==="Amiga Parceira" || input==="Amiga parceira" || input==="amiga parceira" || input==="amiga Parceira")
        location.href="pages/amiga_parceira.html";

    else if (input ==="Baile de Favela" || input==="baile de favela")
        location.href="pages/baile_de_favela.html"

    else if (input ==="Bumbum Granada" || input==="bumbum granada")
        location.href="pages/bumbum_granada.html"

    else if (input ==="Chefe é chefe né Pai" || input==="chefe é chefe né pai" || input==="chefe e chefe ne pai")
        location.href="pages/chefe_e_chefe_ne_pai.html"

    else if (input ==="Devagarinho" || input==="devagarinho")
        location.href="pages/devagarinho.html"

    else if (input ==="Fetiche" || input==="fetiche")
        location.href="pages/fetiche.html"

    else if (input ==="Novinha vai no chão" || input==="novinha vai no chão" || input==="novinha vai no chao")
        location.href="pages/novinha_vai_no_chão.html"

    else if (input ==="Quando o DJ mandar" || input==="quando o DJ mandar" || input==="quando o dj mandar")
        location.href="pages/quando_o_DJ_mandar.html"

    else if(input==="Vem pro meu lounge" || input==="vem pro meu lounge")
        location.href="pages/vem_pro_meu_lounge.html"
    else
        location.href = "video_not_found.html";
}
