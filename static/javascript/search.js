window.onload = function() {
    document.getElementById("search-icon").onclick = function () {
        var input = document.getElementById('inputInfo').value;
        input = input.toLowerCase();
        if(input==="10 Porcento" || input==="10 porcento")
            location.href = "10_porcento.html";
        else if (input==="Amiga Parceira" || input==="Amiga parceira" || input==="amiga parceira" || input==="amiga Parceira")
            location.href="amiga_parceira.html";

        else if (input ==="Baile de Favela" || input==="baile de favela")
            location.href="baile_de_favela.html"

        else if (input ==="Bumbum Granada" || input==="bumbum granada")
            location.href="bumbum_granada.html"

        else if (input ==="Chefe é chefe né Pai" || input==="chefe é chefe né pai" || input==="chefe e chefe ne pai")
            location.href="chefe_e_chefe_ne_pai.html"

        else if (input ==="Devagarinho" || input==="devagarinho")
            location.href="devagarinho.html"

        else if (input ==="Fetiche" || input==="fetiche")
            location.href="fetiche.html"

        else if (input ==="Novinha vai no chão" || input==="novinha vai no chão" || input==="novinha vai no chao")
            location.href="novinha_vai_no_chão.html"

        else if (input ==="Quando o DJ mandar" || input==="quando o DJ mandar" || input==="quando o dj mandar")
            location.href="quando_o_DJ_mandar.html"

        else if(input==="Vem pro meu lounge" || input==="vem pro meu lounge")
            location.href="vem_pro_meu_lounge.html"
        else
            location.href = "../video_not_found.html";
    }
};
