import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
      
    isMenuAberto: false, // Controla se o menu mobile está aberto
            isFixed: false, // Controla se a classe do menu fixo está ativa
            form: {
                nome: '',
                email: '',
                telefone: '',
                mensagem: '',
                captcha: false
            }
    };
  },

  methods: {
            handleScroll() {
                // Ativa o menu fixo após rolar 100px (ajustável)
                if (window.scrollY > 100) {
                    this.isFixed = true;
                } else {
                    this.isFixed = false;
                }
            },
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
        mounted() {
            // Adiciona o listener de scroll nativo do navegador assim que o Vue monta o app
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            // Remove o listener para boas práticas de desempenho ao destruir a instância
            window.removeEventListener('scroll', this.handleScroll);
        },

  template: await get_template("./assets/js/components/menu/home"),
};
