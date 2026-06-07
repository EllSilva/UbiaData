import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
     
                tratamentos: [
                    {
                        nome: "Relatórios e Dashboards Inteligentes",
                        tags: ["Decisões rápidas e assertivas", "Maior clareza e controlo"],
                        descricao: "Desenvolvemos relatórios e dashboards interativos que transformam dados complexos em informações claras, visuais e estratégicas. Utilizamos ferramentas como Power BI, Tableau e Excel para apoiar a tomada de decisão em tempo real, alinhada aos objetivos do negócio.",
                        imagem: "./assets/img/hero/servico001.jpg"
                    },
                    {
                        nome: "Automação de Tarefas e Relatórios",
                        tags: ["Redução de erros e retrabalho.", "Maior produtividade", "estratégicas"],
                        descricao: "Eliminamos processos manuais e repetitivos através da automação inteligente de tarefas e relatórios, aumentando a produtividade e reduzindo erros operacionais.",
                        imagem: "./assets/img/hero/servico002.jpg"
                    },    {
                        nome: "Integração e Pipelines de Dados",
                        tags: ["Renovação celular", "Glow", "Hidratação"],
                        descricao: "Criamos pipelines de dados eficientes para integrar, transformar e disponibilizar informações provenientes de diferentes sistemas, garantindo consistência e fiabilidade dos dados.",
                        imagem: "./assets/img/hero/servico005.jpg"
                    },
                    {
                        nome: "Desenvolvimento e Gestão de Bases de Dados",
                        tags: ["Armazenamento", "Acesso rápido às informações críticas.", "Suporte confiável."],
                        descricao: "Projetamos bases de dados modernas, seguras e escaláveis para armazenar e organizar informações de forma eficiente, proporcionando uma base sólida para análises e tomada de decisões.",
                         imagem: "./assets/img/hero/servico004.jpg"
                    }
                ]
    };
  },

 

  async mounted() {

    

  },
  template: await get_template("./assets/js/view/servicos/home"),
};
