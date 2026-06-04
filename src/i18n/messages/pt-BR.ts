import type { Messages } from "./en";

const ptBR: Messages = {
  meta: {
    title: "Tanya — um agente de código ao vivo no terminal",
    description:
      "Tanya é um agente de código open-source e gratuito de linha de comando que traz a fluidez do Claude Code para o DeepSeek — e verifica o resultado, pra que a confiança de um modelo barato nunca vire bug às 2 da manhã. Grátis hoje, grátis sempre.",
    ogAlt: "Tanya rodando no terminal, editando arquivos e verificando o resultado",
  },
  nav: {
    features: "Recursos",
    how: "Como funciona",
    roadmap: "Roadmap",
    faq: "Dúvidas",
    docs: "Docs",
    github: "GitHub",
    install: "Instalar",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  beta: "Beta pública · v0.7.0 · grátis pra sempre",
  hero: {
    eyebrow: "CLI open-source · feita pro DeepSeek",
    titleLead: "Agente de verdade.",
    titleAccent: "Preço de DeepSeek.",
    titleTail: "Resultado verificado.",
    subtitle:
      "A Tanya traz a fluidez do Claude Code para o DeepSeek — e ela mesma confere o estado final, pra que a confiança de um modelo barato nunca vire seu bug das 2 da manhã. Grátis, open-source, e continua assim.",
    ctaPrimary: "Copiar comando de instalação",
    ctaSecondary: "Dar uma estrela no GitHub",
    copied: "Copiado!",
    runHint: "depois rode",
    terminalTitle: "tanya — sessão ao vivo",
    terminalCaption: "✓ veredito: PRONTO — a própria Tanya conferiu o build",
  },
  scenes: {
    steps: {
      connect: {
        label: "Conectar",
        caption: "Coloque sua chave do DeepSeek e a Tanya sobe num comando só.",
      },
      plan: {
        label: "Planejar",
        caption: "A Tanya transforma seu pedido de uma linha num plano ordenado antes de tocar no código.",
      },
      edit: {
        label: "Editar ao vivo",
        caption: "Veja os arquivos mudando enquanto ela digita — edições em streaming, nada de caixa-preta.",
      },
      verify: {
        label: "Verificar",
        caption: "O diferencial: a Tanya roda o build e confere o resultado antes de dizer que acabou.",
      },
      cost: {
        label: "Conferir o custo",
        caption: "Tokens do DeepSeek custam centavos. A Tanya em si é grátis, pra sempre.",
      },
    },
  },
  openSource: {
    badge: "Grátis pra sempre · open-source",
    title: "Feita às claras. Grátis hoje, grátis sempre.",
    subtitle:
      "A Tanya é open-source no GitHub e não existe plano pago esperando na esquina. Leia cada linha, abra uma issue ou mande um pull request — o projeto melhora porque gente como você empurra ele pra frente.",
    ctaPrimary: "Estrela no GitHub",
    ctaSecondary: "Contribuir",
    points: [
      {
        title: "R$ 0, e continua R$ 0",
        desc: "Sem assinatura, sem licença por usuário, sem muro \"pro\" depois. A única coisa que você paga são seus próprios tokens do DeepSeek.",
      },
      {
        title: "Faça fork, ajuste, publique",
        desc: "O código completo está em github.com/matheusjkweber/tanya sob licença aberta. Deixe do seu jeito.",
      },
      {
        title: "Contribuições são bem-vindas",
        desc: "Bugs, ideias, skill-packs, docs — abra uma issue ou um PR. Cada contribuidor decide pra onde a Tanya vai.",
      },
    ],
  },
  proof: {
    eyebrow: "Por que a Tanya é diferente",
    title: "Modelo barato alucina. A Tanya confere o serviço.",
    subtitle:
      "Todo outro agente barato entrega o que o modelo diz que fez. A Tanya roda um verificador determinístico no estado final antes de avisar que a tarefa acabou.",
    points: [
      {
        title: "Barato pra deixar rodando o dia todo",
        desc: "Aponte a Tanya pro DeepSeek e deixe trabalhar — o serviço do dia a dia sai sem fatura de modelo de ponta.",
      },
      {
        title: "Um veredito em que dá pra confiar",
        desc: "Validadores por tarefa e um verificador de estado final fazem \"pronto\" significar pronto — não \"o modelo disse que sim\".",
      },
      {
        title: "Roteia os passos difíceis",
        desc: "A Tanya mantém o deepseek-chat no trabalho braçal e escala os passos realmente cabeludos pro deepseek-reasoner — automaticamente.",
      },
    ],
  },
  features: {
    eyebrow: "O que tem dentro",
    title: "A ergonomia do Claude Code, ajustada pro DeepSeek",
    subtitle:
      "Tudo que você espera de um agente de terminal sério — edições ao vivo, sub-agentes, MCP, permissões — ajustado pra um modelo barato que precisa de uma segunda conferida.",
    items: {
      verifier: {
        tag: "O diferencial",
        title: "Verificador determinístico de estado final",
        desc: "A Tanya reconfere o repositório depois de trabalhar e mostra um veredito real. Chega de acreditar na palavra de um modelo barato que o build passou.",
      },
      providers: {
        tag: "Traga sua chave",
        title: "Feita pro DeepSeek",
        desc: "A Tanya fala com o DeepSeek pelo endpoint compatível com OpenAI dele. Coloque sua chave do DeepSeek e comece a codar — sem gambiarra, sem wrapper.",
      },
      streaming: {
        tag: "Ao vivo por padrão",
        title: "Veja cada edição acontecer",
        desc: "A execução de ferramentas em streaming mostra arquivos mudando e comandos rodando em tempo real — nunca uma caixa-preta silenciosa.",
      },
      routing: {
        tag: "Gaste onde importa",
        title: "Roteamento deepseek-chat ↔ reasoner",
        desc: "Deixe o deepseek-chat no trabalho braçal e mande os passos realmente difíceis pro deepseek-reasoner, automaticamente.",
      },
      subagents: {
        tag: "Dividir pra conquistar",
        title: "Ferramenta de sub-agentes",
        desc: "Delegue tarefas grandes a sub-agentes focados que planejam, despacham e prestam contas — com TDD e auto-correção opcionais.",
      },
      mcp: {
        tag: "Conectada",
        title: "Suporte a servidores MCP",
        desc: "Plugue servidores Model Context Protocol pra dar à Tanya suas ferramentas, dados e APIs — o mesmo ecossistema que você já usa.",
      },
      permissions: {
        tag: "No controle",
        title: "Permissões e limites de gasto",
        desc: "Aprove ações arriscadas, limite o gasto de tokens e defina travas pra que uma execução afobada nunca te surpreenda.",
      },
      memory: {
        tag: "Fica mais esperta",
        title: "Memória de golden-tasks e mapa do repo",
        desc: "Um mapa estrutural do repositório e a memória de golden-tasks ajudam a Tanya a se achar rápido em código que ela já viu.",
      },
    },
  },
  gallery: {
    eyebrow: "Veja em ação",
    title: "De pasta vazia a app funcionando, passo a passo",
    subtitle:
      "Navegue por uma execução real da Tanya: conectar no DeepSeek, planejar, editar arquivos ao vivo e verificar o build antes de dizer \"pronto\".",
    caption: "A Tanya construindo e verificando um app de calculadora, do início ao fim.",
    note: "execução real · 2× mais rápido",
    realLabel: "A gravação de verdade",
    prev: "Clipe anterior",
    next: "Próximo clipe",
    loadError: "Este clipe não carregou. Sirva o site a partir da raiz para o /media resolver.",
  },
  byoKey: {
    eyebrow: "Traga sua chave",
    title: "A Tanya é grátis. Você só traz uma chave do DeepSeek.",
    subtitle:
      "A Tanya nunca encosta no seu cartão — você paga o DeepSeek direto pelos tokens que usar. A boa notícia: o DeepSeek é um dos modelos mais baratos do mercado, com notas de código e raciocínio no mesmo nível dos grandes modelos de ponta. Resultado de primeira, conta de trocados.",
    stepsTitle: "Rodando em três passos",
    steps: [
      {
        title: "Crie uma conta no DeepSeek",
        desc: "Cadastre-se em platform.deepseek.com — um minuto, um e-mail, pronto.",
      },
      {
        title: "Gere uma chave de API e bote crédito",
        desc: "Abra a página de chaves, gere uma chave e ponha uns trocados de crédito — isso rende muito.",
      },
      {
        title: "Entregue pra Tanya",
        desc: "Defina DEEPSEEK_API_KEY (ou cole na primeira execução) e já era — você está codando.",
      },
    ],
    cta: "Pegar sua chave do DeepSeek",
    benchTitle: "Por que DeepSeek?",
    benchDesc:
      "Benchmarks de ponta por uma fração do preço por token — exatamente o modelo barato-mas-capaz que o verificador da Tanya foi feito pra manter honesto. Você tem código quase de ponta sem a fatura de ponta.",
    stats: [
      { value: "~US$ 0,02", label: "custo típico por tarefa" },
      { value: "compatível com OpenAI", label: "endpoint plug-and-play" },
      { value: "chat + reasoner", label: "roteado automaticamente" },
    ],
  },
  pricing: {
    eyebrow: "Preço",
    title: "Grátis, e open-source pra sempre",
    subtitle:
      "A Tanya em si não custa nada e nunca vai custar. A única coisa que você paga são seus próprios tokens do DeepSeek — e manter essa conta minúscula é justamente a ideia.",
    planName: "Tanya CLI",
    price: "R$ 0",
    priceNote: "open-source · sem conta · grátis pra sempre",
    includes: [
      "O agente completo — verificador, roteamento, sub-agentes, MCP",
      "Feita pro DeepSeek — coloque sua chave de API e comece",
      "Comandos de barra, permissões e limites de gasto",
      "Você só paga o DeepSeek pelos tokens que usar",
    ],
    cta: "Copiar comando de instalação",
    secondary: "Ver código no GitHub",
    finePrint: "Sem assinatura, sem licença por usuário, sem paywall de telemetria. Instale pelo npm e comece.",
  },
  faq: {
    eyebrow: "Perguntas",
    title: "O FAQ honesto",
    subtitle: "A Tanya está em beta pública. Aqui vai exatamente o que isso significa.",
    items: {
      cost: {
        q: "A Tanya é grátis mesmo?",
        a: "É — grátis hoje e grátis sempre. A Tanya é open-source, não custa nada pra instalar ou usar e não tem plano pago no horizonte. Você só paga o DeepSeek pelos tokens que consumir, e como a Tanya foi feita em torno de um modelo barato, essa conta fica pequena.",
      },
      models: {
        q: "Qual modelo a Tanya usa?",
        a: "DeepSeek. A Tanya conecta no endpoint compatível com OpenAI do DeepSeek — você fornece sua própria chave do DeepSeek e roda. Ela usa o deepseek-chat no dia a dia e pode escalar os passos mais difíceis pro deepseek-reasoner automaticamente.",
      },
      verifier: {
        q: "O que o verificador faz na prática?",
        a: "Depois que a Tanya termina uma tarefa, um verificador determinístico inspeciona o estado final do seu repositório e validadores por tarefa conferem o objetivo específico. Você recebe um veredito real de passou/falhou em vez de confiar que o modelo fez o que disse.",
      },
      openSource: {
        q: "Onde está o código-fonte?",
        a: "No GitHub em matheusjkweber/tanya, publicado no npm como @matheuskrumenauer/tanya. Issues e contribuições de skill-packs são bem-vindas.",
      },
      platforms: {
        q: "O que preciso pra rodar?",
        a: "Node.js e um terminal no macOS, Linux ou Windows. Instale globalmente com npm, configure sua chave de API do DeepSeek e rode tanya. Uma versão web hospedada está a caminho.",
      },
      claudeCode: {
        q: "Qual a diferença pro Claude Code?",
        a: "A mesma ergonomia — chat ao vivo, comandos de barra, sub-agentes, MCP — mas feita pro DeepSeek, com o verificador determinístico como destaque, porque um modelo mais barato precisa dessa conferida ainda mais. E é grátis e open-source.",
      },
    },
  },
  finalCta: {
    title: "Suba a Tanya com um comando só",
    subtitle: "Abra um terminal, instale pelo npm, aponte pro DeepSeek. É toda a configuração — e é de graça.",
    primary: "Copiar comando de instalação",
    secondary: "Ler a documentação",
  },
  footer: {
    tagline: "O agente de código que roda no que você pode pagar — e prova que funcionou.",
    product: "Produto",
    resources: "Recursos",
    legal: "Legal",
    links: {
      features: "Recursos",
      pricing: "Preço",
      faq: "Dúvidas",
      github: "GitHub",
      npm: "Pacote npm",
      docs: "Documentação",
      terms: "Termos de Serviço",
      support: "Suporte",
      contact: "Contato",
    },
    honesty:
      "Beta pública. Nesta página não tem instalação, nota ou avaliação falsa — só o produto.",
    rights: "Tanya. Open-source, feita pra quem constrói.",
  },
  roadmap: {
    eyebrow: "Roadmap",
    title: "De onde a Tanya veio — e pra onde vai",
    subtitle:
      "A Tanya já resolve a parte difícil: um agente de código de verdade que funciona em modelos baratos. Esse é o caminho até aqui e o que vem a seguir, rumo a um poder nível Claude Code com as suas próprias chaves.",
    nowLabel: "Você está aqui",
    legend: { shipped: "Pronto", next: "Em andamento", planned: "Planejado", later: "Depois" },
    milestones: [
      {
        status: "shipped",
        title: "Um agente de código que aguenta a DeepSeek",
        desc: "Parsing tolerante de tool calls, retry com correção, achatamento de schema e suporte a modelos de raciocínio — a base que torna modelos baratos utilizáveis.",
        items: ["Recuperação de tool call", "REPL em streaming", "Modelos de raciocínio"],
      },
      {
        status: "shipped",
        title: "A muralha do verificador",
        desc: "Um verificador determinístico, validadores por plataforma e um portão de padrões proibidos pegam as alucinações e bugs que modelos baratos passariam batido.",
        items: ["Verificador", "Validadores Apple / Android / Go / Prisma", "Portão de padrões proibidos"],
      },
      {
        status: "shipped",
        title: "Gaste menos, roteie melhor",
        desc: "Roteamento multi-provedor por etapa com cascata por custo e tamanho de contexto, mais um contador de tokens e USD ao vivo pra conta nunca te surpreender.",
        items: ["Roteamento multi-modelo", "Cascata de custo", "Contador de custo ao vivo"],
      },
      {
        status: "shipped",
        title: "Um agente que você estende",
        desc: "Cliente e servidor MCP, slash commands, pacotes de skills, memória de projeto e sub-agentes limitados — com retomada de sessão pra trabalho longo não se perder.",
        items: ["MCP cliente + servidor", "Slash commands", "Skills", "Sub-agentes", "Retomada de sessão"],
      },
      {
        status: "next",
        title: "Núcleo de extensibilidade",
        desc: "Os recursos que transformam a Tanya de um agente numa plataforma que você molda ao seu fluxo.",
        items: ["Hooks de ciclo de vida", "Sub-agentes nomeados", "Templates de slash command"],
      },
      {
        status: "planned",
        title: "Paridade no dia a dia",
        desc: "As interações que deixam um agente de código natural de usar todo dia.",
        items: ["Modo de plano interativo", "Memória hierárquica + imports", "Ferramentas web", "Shells em segundo plano"],
      },
      {
        status: "planned",
        title: "Poder e confiança",
        desc: "Mais controle e segurança pra quem vive no terminal.",
        items: ["Checkpoint / rewind", "Configuração unificada", "Visão de contexto + statusline", "Estilos de saída"],
      },
      {
        status: "later",
        title: "Ecossistema",
        desc: "Ir além da CLI quando o núcleo estiver sólido.",
        items: ["Automação de Git / PR", "Sandbox de SO", "Entrada de imagem", "SDK"],
      },
    ],
  },
  featureSuggest: {
    title: "Tem algo que a gente deveria construir?",
    subtitle: "O roadmap é guiado pelo que quem constrói realmente precisa. Conta o que deixaria a Tanya melhor — cai direto na nossa caixa de entrada.",
    placeholder: "Eu queria que a Tanya pudesse…",
    emailPlaceholder: "voce@email.com (opcional, se quiser resposta)",
    submit: "Enviar sugestão",
    sending: "Enviando…",
    successTitle: "Recebido — obrigado!",
    successBody: "Sua ideia está na nossa caixa de entrada. As melhores entram no roadmap aí em cima.",
    errorBody: "Não deu pra enviar automaticamente, então abrimos um rascunho de e-mail já preenchido pra você.",
  },
  common: {
    backHome: "Voltar ao início",
    lastUpdated: "Última atualização",
    comingSoon: "Em breve",
    emailUs: "Mande um e-mail",
  },
  terms: {
    title: "Termos de Serviço",
    intro:
      "A Tanya é um software open-source oferecido gratuitamente. Ao instalar ou usar, você concorda com os termos abaixo. Linguagem direta, sem pegadinha.",
    sections: [
      {
        h: "1. O software",
        p: "A Tanya é um agente de código de linha de comando distribuído como o pacote npm @matheuskrumenauer/tanya e no GitHub. É fornecido no estado em que se encontra, como uma beta pública ainda em evolução.",
      },
      {
        h: "2. Sem conta, sem taxas",
        p: "Usar a Tanya não exige conta e não custa nada. Qualquer cobrança que você tiver vem do DeepSeek, cuja chave de API você fornece. Essa relação segue os termos próprios do DeepSeek.",
      },
      {
        h: "3. Seu código e seus dados",
        p: "A Tanya roda localmente na sua máquina e age sobre os arquivos e comandos que você direcionar. Prompts e código que você envia ao DeepSeek seguem as políticas de dados do DeepSeek. Não operamos um servidor que armazena seus repositórios.",
      },
      {
        h: "4. Uso aceitável",
        p: "Use a Tanya dentro da lei. Você é responsável pelas ações que ela executa em seu nome, incluindo o código que escreve, os comandos que roda e o dinheiro gasto em tokens. Revise as mudanças antes de confiar nelas.",
      },
      {
        h: "5. Propriedade intelectual e licença",
        p: "O código da Tanya é aberto. O código que você escreve com a Tanya é seu. A saída do modelo do DeepSeek segue os termos do DeepSeek.",
      },
      {
        h: "6. Garantia e responsabilidade",
        p: "A Tanya é fornecida sem garantia de qualquer tipo. Na máxima extensão permitida por lei, os mantenedores não se responsabilizam por danos decorrentes do uso, incluindo perda de dados ou gasto com o DeepSeek. O verificador é uma forte rede de segurança, não uma garantia de correção.",
      },
      {
        h: "7. Lei aplicável",
        p: "Estes termos são regidos pelas leis da jurisdição do mantenedor [placeholder — a ser finalizado antes da disponibilidade geral]. Se alguma cláusula for inexequível, o restante permanece em vigor.",
      },
      {
        h: "8. Alterações",
        p: "Podemos atualizar estes termos conforme a Tanya passa da beta para uma versão estável. Mudanças relevantes serão refletidas na data acima e no repositório do GitHub.",
      },
    ],
  },
  support: {
    title: "Suporte",
    intro:
      "A Tanya é um projeto open-source pequeno em beta pública. O jeito mais rápido de conseguir ajuda está abaixo — a gente lê tudo.",
    primaryChannel: "Mande um e-mail para",
    faqTitle: "Dúvidas comuns",
    items: [
      {
        q: "A Tanya não conecta no DeepSeek — e agora?",
        a: "Rode `tanya providers test` pra validar sua chave do DeepSeek e o endpoint. A maioria dos casos é uma variável de ambiente faltando ou uma base URL que não aponta pro endpoint compatível com OpenAI do DeepSeek.",
      },
      {
        q: "Como reporto um bug ou peço um recurso?",
        a: "Abra uma issue no GitHub em matheusjkweber/tanya. Inclua o comando que rodou e a saída. Feedback de beta molda o roadmap de verdade.",
      },
      {
        q: "O agente fez algo que eu não esperava.",
        a: "Use a camada de permissões e os limites de gasto pra exigir aprovação em ações arriscadas, e o `/verify` pra reconferir o resultado. Se algo passou batido, abra uma issue com os detalhes da sessão.",
      },
      {
        q: "Existe documentação?",
        a: "Sim — o README e os docs no repositório do GitHub cobrem provedores, roteamento, economia de tokens e o verificador. Mais guias chegam conforme a beta amadurece.",
      },
    ],
  },
  contact: {
    title: "Contato",
    intro:
      "Dúvidas, ideias de parceria ou feedback de beta? Manda uma mensagem — ela chega em quem está construindo a Tanya.",
    nameLabel: "Seu nome",
    emailLabel: "Seu e-mail",
    messageLabel: "Mensagem",
    namePlaceholder: "Ada Lovelace",
    emailPlaceholder: "voce@exemplo.com",
    messagePlaceholder: "Conta o que você está construindo com a Tanya…",
    submit: "Enviar mensagem",
    sending: "Enviando…",
    successTitle: "Mensagem enviada",
    successBody: "Valeu por escrever — chegou direto em quem está construindo a Tanya. A gente responde no e-mail que você deixou.",
    sendAnother: "Enviar outra mensagem",
    errorBody:
      "Não deu pra enviar automaticamente, então abrimos um rascunho de e-mail já preenchido pra você. Se nada apareceu, escreva direto pra contato@tanyahq.com.",
    directLabel: "Prefere seu próprio cliente de e-mail?",
    githubLabel: "Achou um bug?",
    githubDesc: "Abra uma issue no GitHub — é o caminho mais rápido pro conserto.",
  },
};

export default ptBR;
