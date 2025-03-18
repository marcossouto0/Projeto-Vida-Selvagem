export interface ActionsData {
  title:       string;
  description: string;
  actions:     Action[];
}

export interface Action {
  icon:  string;
  title: string;
  items: Item[];
}

export interface Item {
  title:       string;
  description: string;
}

const actionsData: ActionsData = {
  "title": "Nossas Ações",
  "description": "Conheça as iniciativas que desenvolvemos para proteger a tundra e seus habitantes, com foco especial na conservação das renas e seu habitat.",
  "actions": [
    {
      "icon": "FaShieldAlt",
      "title": "Conservação e Proteção",
      "items": [
        {
          "title": "Monitoramento das populações",
          "description": "Apoiar pesquisas sobre as renas e os impactos das mudanças climáticas em suas rotas migratórias e comportamento."
        },
        {
          "title": "Criação de áreas protegidas",
          "description": "Preservar territórios essenciais para a sobrevivência das renas, incluindo rotas migratórias e áreas de reprodução."
        },
        {
          "title": "Combate à caça ilegal",
          "description": "Promover fiscalização e conscientização contra a caça predatória, trabalhando com comunidades locais e autoridades."
        }
      ]
    },
    {
      "icon": "FaGraduationCap",
      "title": "Educação e Conscientização",
      "items": [
        {
          "title": "Campanhas de sensibilização",
          "description": "Criar conteúdos educativos sobre a importância da tundra e das renas para o equilíbrio ecológico global."
        },
        {
          "title": "Programas escolares",
          "description": "Desenvolver materiais didáticos sobre a tundra e as renas para escolas, incentivando a conscientização desde cedo."
        },
        {
          "title": "Turismo responsável",
          "description": "Promover o ecoturismo sustentável na tundra, gerando renda para comunidades locais e conscientização para visitantes."
        }
      ]
    },
    {
      "icon": "FaHandsHelping",
      "title": "Apoio às Comunidades Tradicionais",
      "items": [
        {
          "title": "Valorização do conhecimento tradicional",
          "description": "Reconhecer e integrar o conhecimento dos povos indígenas sobre as renas e a tundra em projetos de conservação."
        },
        {
          "title": "Apoio a práticas sustentáveis",
          "description": "Incentivar práticas tradicionais sustentáveis de manejo de renas, respeitando a cultura e os direitos dos povos indígenas."
        },
        {
          "title": "Desenvolvimento de alternativas econômicas",
          "description": "Apoiar o desenvolvimento de alternativas econômicas sustentáveis para comunidades que dependem das renas."
        }
      ]
    },
    {
      "icon": "FaSearch",
      "title": "Pesquisa e Monitoramento",
      "items": [
        {
          "title": "Estudos sobre mudanças climáticas",
          "description": "Financiar pesquisas sobre os impactos das mudanças climáticas na tundra e nas populações de renas."
        },
        {
          "title": "Monitoramento por satélite",
          "description": "Utilizar tecnologias de sensoriamento remoto para monitorar as migrações das renas e as mudanças na cobertura de neve e gelo."
        },
        {
          "title": "Colaboração científica internacional",
          "description": "Promover a colaboração entre cientistas de diferentes países para estudar e proteger as renas e a tundra."
        }
      ]
    },
    {
      "icon": "FaGlobeAmericas",
      "title": "Ação Climática",
      "items": [
        {
          "title": "Advocacia por políticas climáticas",
          "description": "Defender políticas nacionais e internacionais de redução de emissões de gases de efeito estufa para mitigar as mudanças climáticas."
        },
        {
          "title": "Projetos de adaptação",
          "description": "Desenvolver e implementar projetos de adaptação às mudanças climáticas para comunidades e ecossistemas da tundra."
        },
        {
          "title": "Compensação de carbono",
          "description": "Promover projetos de compensação de carbono que beneficiem a conservação da tundra e das renas."
        }
      ]
    }
  ]
}

export default actionsData;