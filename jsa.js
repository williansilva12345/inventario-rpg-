
         const caixa1 = document.getElementById("caixa1");
            const caixa2 = document.getElementById("caixa2");
            const cursos = [...document.querySelectorAll(".curso")];

             const btn   =  document.getElementById('btn');

            
              cursos.map ((el) => {
                el.addEventListener("click", (evt) => {
                    const abn = evt.target;
                    abn.classList.toggle("selec");
                });
            });

            

            btn.addEventListener("click" ,()=>{
              
                     const selecionados = [...document.querySelectorAll(".selec")];
                const naoSelecionados = [...document.querySelectorAll(".curso:not(.selec)")];

                selecionados.forEach((ele) => { 
                    caixa2.appendChild(ele);
                });

                naoSelecionados.forEach ((al) => {
                    caixa1.appendChild(al);

            })
            
            })     

                 
        </script>