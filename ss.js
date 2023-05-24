function revisarParam(parametro){
    if(parametro.includes("&")||parametro.includes("?")){
    return "&";
    }else{
    return "?";
    }
    }
    
    window.onload = function(){
        //se obtiene todos los botones con atributo clase "botoncompra"
        var botonesCompra = document.getElementsByClassName("botoncompra");
    const urlParam = new URLSearchParams(window.location.search);
    const myParam = urlParam.get('src');
      let sourceHotmart = myParam;
      if (sourceHotmart=="" || sourceHotmart==null || sourceHotmart=="null"){
        sourceHotmart="src=default";
      }else{
        sourceHotmart="src="+sourceHotmart;
      }
      for(var i = 0; i<botonesCompra.length;i++){
        let urlBoton = botonesCompra(i).getElementsByClassName('a')[0].href;
        botonesCompra(i).getElementsByTagName('a')[0].href = botonesCompra[i].getElementsByTagName('a')[0].href+revisarParam(urlBoton)+sourceHotmart+"btn"+(i+1);
      }
    }