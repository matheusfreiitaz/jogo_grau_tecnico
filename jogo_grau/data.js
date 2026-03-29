/**
 * data.js — Banco de Questões
 * Cada módulo contém um array de objetos com:
 *   q           — texto da pergunta
 *   options     — array de 4 alternativas
 *   correct     — índice da alternativa correta (0-3)
 *   explanation — explicação exibida após responder
 */

const questionsDB = {

  /* -------- Identificação de Componentes -------- */
  identification: [
    {
      q: "Qual é o componente responsável pelo processamento de dados?",
      options: ["CPU/Processador", "Placa de Vídeo", "Memória RAM", "HD/SSD"],
      correct: 0,
      explanation: "A CPU (Central Processing Unit) é o cérebro do computador, responsável por executar todas as instruções e processar dados."
    },
    {
      q: "Qual componente armazena dados permanentemente?",
      options: ["Memória RAM", "HD/SSD", "Cache", "Registrador"],
      correct: 1,
      explanation: "HD (Hard Disk) e SSD (Solid State Drive) são dispositivos de armazenamento permanente que mantêm os dados mesmo quando o computador é desligado."
    },
    {
      q: "Qual peça fornece energia para todos os componentes?",
      options: ["Gabinete", "Cooler", "Fonte de Alimentação", "Placa-Mãe"],
      correct: 2,
      explanation: "A fonte de alimentação converte energia elétrica da tomada em corrente adequada para os componentes do PC."
    },
    {
      q: "Onde são conectados processador, RAM e placa de vídeo?",
      options: ["HD", "Fonte", "Placa-Mãe", "Gabinete"],
      correct: 2,
      explanation: "A placa-mãe (motherboard) é a base onde todos os componentes principais são conectados e se comunicam."
    },
    {
      q: "Qual componente é responsável por gráficos em jogos?",
      options: ["CPU", "GPU/Placa de Vídeo", "RAM", "SSD"],
      correct: 1,
      explanation: "A GPU (Graphics Processing Unit) ou placa de vídeo é especializada em processar gráficos e imagens."
    }
  ],

  /* -------- Diagnóstico de Problemas -------- */
  diagnostic: [
    {
      q: "PC não liga e não emite som. Possível causa?",
      options: ["HD com defeito", "Problema na fonte/energia", "Monitor desligado", "Vírus"],
      correct: 1,
      explanation: "Se não há sinais de vida (LEDs, ventoinhas), o problema geralmente está na fonte de alimentação ou conexões de energia."
    },
    {
      q: "Computador liga mas não aparece imagem. Causa provável?",
      options: ["HD formatado", "Problema na GPU/monitor", "RAM com defeito", "Vírus"],
      correct: 1,
      explanation: "Sem imagem mas com PC ligado indica problema na placa de vídeo, cabo de vídeo ou monitor."
    },
    {
      q: "PC emite bips ao ligar. O que significam?",
      options: ["Música de inicialização", "Códigos de erro da BIOS", "Aviso de vírus", "Som normal"],
      correct: 1,
      explanation: "Bips são códigos POST da BIOS indicando erros de hardware (RAM, GPU, etc)."
    },
    {
      q: "Computador reinicia sozinho. Causa comum?",
      options: ["Atualização automática", "Superaquecimento", "HD cheio", "Internet lenta"],
      correct: 1,
      explanation: "Reinícios inesperados geralmente são causados por superaquecimento da CPU/GPU ou problemas na fonte."
    },
    {
      q: "Tela azul (BSOD) frequente. Solução?",
      options: ["Reinstalar Windows", "Verificar RAM e drivers", "Trocar monitor", "Limpar teclado"],
      correct: 1,
      explanation: "Telas azuis indicam problemas de hardware (RAM) ou drivers incompatíveis/corrompidos."
    }
  ],

  /* -------- Montagem de PC -------- */
  assembly: [
    {
      q: "Primeira peça a instalar ao montar um PC?",
      options: ["GPU", "Fonte de alimentação", "Processador na placa-mãe", "HD"],
      correct: 2,
      explanation: "Instale primeiro CPU, cooler e RAM na placa-mãe antes de fixá-la no gabinete. É mais fácil!"
    },
    {
      q: "Antes de instalar o processador, deve-se?",
      options: ["Ligar a energia", "Levantar a trava do socket", "Forçar encaixe", "Aplicar pasta térmica"],
      correct: 1,
      explanation: "Sempre levante a trava/alavanca do socket antes de instalar a CPU para evitar danos."
    },
    {
      q: "Ao instalar RAM, deve-se?",
      options: ["Forçar violentamente", "Abrir travas e alinhar chanfro", "Instalar em qualquer slot", "Não usar travas"],
      correct: 1,
      explanation: "Abra as travas laterais do slot, alinhe o chanfro da RAM e pressione uniformemente até travar."
    },
    {
      q: "Ordem correta de montagem no gabinete?",
      options: ["GPU, depois placa-mãe", "Placa-mãe, depois componentes", "HD primeiro, resto depois", "Qualquer ordem"],
      correct: 1,
      explanation: "Instale placa-mãe com CPU/RAM primeiro, depois GPU, armazenamento e conecte cabos."
    },
    {
      q: "Ao conectar fonte, conectores mais importantes?",
      options: ["Só cabo de força", "ATX 24-pinos + CPU 8-pinos", "Apenas periféricos", "SATA apenas"],
      correct: 1,
      explanation: "Conecte obrigatoriamente o ATX 24-pinos (placa-mãe) e CPU 4/8-pinos para o sistema ligar."
    }
  ],

  /* -------- Compatibilidade -------- */
  compatibility: [
    {
      q: "Processador Intel Core i5-12600K é compatível com?",
      options: ["Socket AM4", "Socket LGA 1700", "Socket AM5", "Socket LGA 1200"],
      correct: 1,
      explanation: "Intel 12ª geração (Alder Lake) usa socket LGA 1700. Sempre verifique compatibilidade!"
    },
    {
      q: "RAM DDR4 funciona em placa com DDR5?",
      options: ["Sim, perfeito", "NÃO, são incompatíveis", "Só com adaptador", "Depende da cor"],
      correct: 1,
      explanation: "DDR4 e DDR5 têm chanfros diferentes e voltagens distintas. São FISICAMENTE incompatíveis."
    },
    {
      q: "Ryzen 5 7600X requer qual socket?",
      options: ["AM4", "AM5", "LGA 1700", "AM3"],
      correct: 1,
      explanation: "Ryzen série 7000 usa novo socket AM5 (não compatível com AM4)."
    },
    {
      q: "Fonte com apenas 1 conector PCIe 8-pin pode alimentar?",
      options: ["RTX 4090", "GTX 1650", "RTX 4070 Ti", "RX 7900 XTX"],
      correct: 1,
      explanation: "GTX 1650 consome ~75W (sem conector extra). GPUs topo de linha precisam múltiplos conectores 8-pin."
    },
    {
      q: "Placa-mãe B550 (AMD) suporta?",
      options: ["Intel Core i9", "Ryzen 5000/7000", "Ryzen 5000 (não 7000)", "Pentium 4"],
      correct: 2,
      explanation: "B550 é socket AM4 e suporta Ryzen 3000/5000. Ryzen 7000 precisa de AM5."
    }
  ],

  /* -------- Manutenção -------- */
  maintenance: [
    {
      q: "Frequência recomendada para limpeza interna?",
      options: ["Nunca limpar", "A cada 3-6 meses", "Só quando quebrar", "Diariamente"],
      correct: 1,
      explanation: "Limpeza a cada 3-6 meses (ou mais em ambientes empoeirados) previne superaquecimento."
    },
    {
      q: "Melhor método para limpar componentes internos?",
      options: ["Água e sabão", "Ar comprimido/pincel macio", "Aspirador doméstico", "Mangueira"],
      correct: 1,
      explanation: "Use ar comprimido ou pincel antiestático. NUNCA água ou aspirador (gera estática)."
    },
    {
      q: "Ao trocar pasta térmica, deve-se?",
      options: ["Adicionar sobre a antiga", "Remover antiga e limpar com álcool isopropílico", "Não remover antiga", "Usar pasta de dente"],
      correct: 1,
      explanation: "SEMPRE remova pasta antiga com álcool isopropílico 99% antes de aplicar nova camada."
    },
    {
      q: "Temperatura normal de CPU em uso?",
      options: ["90-100°C", "40-70°C", "100-120°C", "10-20°C"],
      correct: 1,
      explanation: "CPU saudável: idle 30-45°C, uso 40-70°C. Acima de 80°C constantemente indica problema de refrigeração."
    },
    {
      q: "Sintoma de pasta térmica ressecada?",
      options: ["PC mais rápido", "Superaquecimento e throttling", "Nenhum sintoma", "Tela colorida"],
      correct: 1,
      explanation: "Pasta ressecada perde eficiência térmica, causando superaquecimento e redução de desempenho."
    }
  ],

  /* -------- Desafio Profissional -------- */
  professional: [
    {
      q: "Cliente: 'PC não inicia, apenas bips longos'. Diagnóstico?",
      options: ["HD corrompido", "Memória RAM não detectada", "Windows desatualizado", "Mouse sem fio"],
      correct: 1,
      explanation: "Bips longos geralmente indicam falha na RAM. Teste recolocando os pentes ou testando slots diferentes."
    },
    {
      q: "Montagem high-end: Ryzen 9 7950X + RTX 4090. Fonte mínima?",
      options: ["500W", "1000W ou superior", "300W", "750W"],
      correct: 1,
      explanation: "RTX 4090 (450W) + Ryzen 9 7950X (170W) + sistema = ~850W. Fonte 1000W+ garante estabilidade e margem."
    },
    {
      q: "Troubleshooting: PC liga, sem vídeo, RAM testada OK. Próximo passo?",
      options: ["Formatar HD", "Testar GPU em outra máquina ou vídeo integrado", "Trocar mouse", "Reinstalar Chrome"],
      correct: 1,
      explanation: "Com RAM OK, teste outra GPU ou vídeo integrado para isolar se o problema está na placa de vídeo."
    },
    {
      q: "Cliente quer máxima performance. Dual-channel ou single?",
      options: ["Single-channel melhor", "Dual-channel (2 pentes)", "Tanto faz", "Não usar RAM"],
      correct: 1,
      explanation: "Dual-channel (2+ pentes em slots corretos) dobra largura de banda da RAM, aumentando performance."
    },
    {
      q: "Erro POST: 'CPU over temperature'. Ação imediata?",
      options: ["Ignorar e continuar", "Desligar, verificar cooler e pasta térmica", "Overclock mais", "Remover cooler"],
      correct: 1,
      explanation: "NUNCA ignore temperatura crítica! Desligue, verifique se cooler está bem fixado e pasta térmica adequada."
    }
  ]
};
