import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
      
            form: {
                nome: '',
                email: '',
                telefone: '',
                mensagem: '',
                captcha: false
            },
              tratamentos: [
                    {
                        nome: "Porquê Escolher a UbiaData",
                        tags: ["Dashboards Inteligentes", "Automatização", "KPIs"],
                        descricao: "Na UbiaData, transformamos dados em decisões inteligentes. Acreditamos que a informação só gera valor quando é clara, acessível e orientada para resultados.Apoiamos empresas de diferentes setores na organização, análise e visualização estratégica dos seus dados, permitindo uma gestão mais eficiente e uma tomada de decisão baseada em factos.",
                        imagem: "./assets/img/hero/porque.jpg"
                    },
                 {
                        nome: " Gestão de Dados Inteligente para empresas que querem crescer com informação confiável e decisões estratégicas.",
                        tags: ["Firmeza", "Hidratação", "Para o dia a dia"],
                        imagem: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800"
                    }
                ]
    };
  },

  methods: {
     enviarFormulario() {
                if(!this.form.captcha) {
                    alert('Por favor, confirme que você não é um robô.');
                    return;
                }
                alert('Obrigado, ' + this.form.nome + '! Sua mensagem foi enviada com sucesso.');
                
                this.form.nome = '';
                this.form.email = '';
                this.form.telefone = '';
                this.form.mensagem = '';
                this.form.captcha = false;
            }
  },

 
  template: await get_template("./assets/js/view/home/home"),
};
