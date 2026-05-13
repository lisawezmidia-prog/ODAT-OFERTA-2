/**
 * LP BASE — ODAT
 * ─────────────────────────────────────────────────────────────
 * Engine que injeta o conteúdo específico do hábito diretamente
 * na estrutura já existente (progressive-reveal-container),
 * mantendo o layout Apple intacto.
 * ─────────────────────────────────────────────────────────────
 */

window.LP = window.LP || {};

/**
 * LP.updateDOM(config)
 * Substitui os textos de todos os nós específicos pelas strings fornecidas no config.
 */
LP.updateDOM = function(config) {
    if (!config) return;

    const setSingleHTML = (selector, html) => {
        if (!html) return;
        const el = document.querySelector(selector);
        if (el) el.innerHTML = html;
    };

    const setByIndex = (selector, index, html) => {
        if (!html) return;
        const els = document.querySelectorAll(selector);
        if (els && els[index]) els[index].innerHTML = html;
    };

        // .result-message
    setByIndex('.result-message p', 0, config.resMsg1);
    setByIndex('.result-message p', 1, config.resMsg2);
    setByIndex('.result-message p', 2, config.resMsg3);
    setByIndex('.result-message p', 3, config.resMsg4);

    // #section-description
    setSingleHTML('#section-description h2', config.secDescTitle);
    setSingleHTML('#section-description p', config.secDescText);

    // #section-2
    setSingleHTML('#section-2 h2', config.sec2Title);
    setByIndex('#section-2 .sub-headline', 0, config.sec2Sub1);
    setByIndex('#section-2 .sub-headline', 1, config.sec2Sub2);
    setSingleHTML('#section-2 .emotional-highlight', config.sec2Highlight);

    // #section-3
    setSingleHTML('#section-3 h2', config.sec3Title);
    setByIndex('#section-3 .sub-headline', 0, config.sec3Sub1);
    setSingleHTML('#section-3 .section-label-blue', config.sec3Label);
    setByIndex('#section-3 .sub-headline', 1, config.sec3Sub2);
    setByIndex('#section-3 .sub-headline', 2, config.sec3Sub3);
    setByIndex('#section-3 .sub-headline', 3, config.sec3Sub4);

    // #section-benefits-extra
    setByIndex('#section-benefits-extra .sub-headline', 0, config.secExtra1);
    setByIndex('#section-benefits-extra .sub-headline', 1, config.secExtra2);

    // #section-4
    setSingleHTML('#section-4 h2', config.sec4Title);
    setByIndex('#section-4 .sub-headline', 0, config.sec4Sub1);
    setByIndex('#section-4 .sub-headline', 1, config.sec4Sub2);
    setByIndex('#section-4 .sub-headline', 2, config.sec4Sub3);
    setByIndex('#section-4 .sub-headline', 3, config.sec4Sub4);

    // #section-emotional-universal
    setSingleHTML('#section-emotional-universal h2', config.secUnivTitle);
    setSingleHTML('#section-emotional-universal p', config.secUnivText);
    setSingleHTML('#section-emotional-universal div.reveal', config.secUnivLabel);

    // #section-5
    setSingleHTML('#section-5 h2', config.sec5Title);
    setSingleHTML('#section-5 p', config.sec5Text);

    // #section-6
    setSingleHTML('#section-6 h2', config.sec6Title);
    setSingleHTML('#section-6 p', config.sec6Text);
    setByIndex('#section-6 .sub-headline', 0, config.sec6Sub1);
    setByIndex('#section-6 .sub-headline', 1, config.sec6Sub2);

    // #section-7
    setSingleHTML('#section-7 .sub-headline', config.sec7Text);
};

/**
 * LP.openForHabit(habitName)
 * Inicia o carregamento do módulo da LP correspondente
 */
LP.openForHabit = function(habitName) {
    const habitToModule = {
        'Álcool':              'lp/alcool/content.js',
        'Cigarro':             'lp/cigarro/content.js',
        'Açúcar':              'lp/acucar/content.js',
        'Pornografia':         'lp/pornografia/content.js',
        'Apostas':             'lp/apostas/content.js',
        'Fast Food':           'lp/fastfood/content.js',
        'Refrigerante':        'lp/refrigerante/content.js',
        'Redes Sociais':       'lp/redes_sociais/content.js',
        'Compras impulsivas':  'lp/compras_impulsivas/content.js',
        'Vape/Nicotina':       'lp/vape_nicotina/content.js',
        'Algo diferente':      'lp/algo_diferente/content.js'
    };

    const modulePath = habitToModule[habitName] || habitToModule['Algo diferente'];

    const existingScript = document.querySelector(`script[data-lp-module="${modulePath}"]`);
    if (existingScript) {
        LP._triggerRender(habitName);
        return;
    }

    const script = document.createElement('script');
    script.src = modulePath;
    script.setAttribute('data-lp-module', modulePath);
    script.onload = function() {
        LP._triggerRender(habitName);
    };
    script.onerror = function() {
        console.warn('[LP] Módulo não encontrado: ' + modulePath + '. Usando default.');
        LP.updateDOM(LP._defaultConfig());
    };
    document.head.appendChild(script);
};

LP._triggerRender = function(habitName) {
    const config = window.__lpRegistry && window.__lpRegistry[habitName];
    if (config) {
        LP.updateDOM(config);
    } else {
        LP.updateDOM(LP._defaultConfig());
    }
};

/**
 * LP._defaultConfig()
 * Configuração original do index.html (fallback)
 */
LP._defaultConfig = function() {
    return {
                resMsg1: 'O que você recupera vai além de<br>dinheiro, tempo ou calorias.',
        resMsg2: 'Mais presença.<br>Menos impulsos.',
        resMsg3: 'Dormir sem culpa.<br>Acordar sem recomeçar do zero.',
        resMsg4: 'Voltar a sentir controle sobre os próprios dias.',
        secDescTitle: 'Recupere o controle. <span style="color: var(--blue);">Um dia de cada vez.</span>',
        secDescText: '<span style="color: #fff;">A liberdade é feita de pequenas escolhas.</span><br><span style="color: #fff;">ODAT</span> transforma sua vontade em um sistema infalível para substituir a ansiedade pelo progresso. Recupere seu tempo, seu dinheiro e você mesmo.',
        sec2Title: 'Não é força de vontade.',
        sec2Sub1: 'Na hora decisiva,<br>sua mente assume.',
        sec2Sub2: 'Sem um sistema,<br>você sempre volta para o mesmo ponto.',
        sec2Highlight: 'E cada vez que isso acontece,<br>você confia menos em si mesmo.',
        sec3Title: 'Você não está mais sozinho.',
        sec3Sub1: 'Os momentos mais difíceis raramente acontecem quando alguém está olhando.',
        sec3Label: 'IA QUE INTERVÉM QUANDO VOCÊ MAIS PRECISA',
        sec3Sub2: 'Apoio no momento em que sua mente mais tenta desistir.',
        sec3Sub3: 'Um sistema inteligente que reconhece seus padrões antes da recaída.',
        sec3Sub4: 'Intervenções discretas nos momentos em que você mais precisa.',
        secExtra1: 'Mais clareza.',
        secExtra2: 'Menos culpa.',
        sec4Title: 'Apoio real, quando importa.',
        sec4Sub1: 'Conecte pessoas de confiança.<br>Acesse suporte profissional.',
        sec4Sub2: 'Uma rede pronta para te sustentar<br>nos momentos em que você mais precisa.',
        sec4Sub3: 'A recaída quase sempre começa em silêncio.',
        sec4Sub4: 'O apoio também.',
        secUnivTitle: 'Cada pessoa luta contra algo diferente.',
        secUnivText: '<span style="color: #fff;">ODAT</span> foi criado para ajudar pessoas a recuperar o controle sobre qualquer hábito, impulso ou padrão que esteja afastando elas da própria vida.',
        secUnivLabel: 'Um dia de cada vez.',
        sec5Title: 'Progresso que você enxerga.',
        sec5Text: 'Acompanhe, em tempo real: o dinheiro que deixa de perder, o tempo que está recuperando e a evolução que está construindo.',
        sec6Title: 'Cada vitória evolui você.',
        sec6Text: 'Com níveis e recompensas, você não apenas abandona hábitos.<br>Você constrói uma nova versão de si mesmo.',
        sec6Sub1: 'Menos impulsos. Mais consciência.',
        sec6Sub2: 'Menos culpa. Mais presença.',
        sec7Text: '<span style="color: var(--white);">Você não perde apenas tempo.</span><br>Perde momentos, energia, clareza e partes de si mesmo aos poucos.'
    };
};

window.__lpRegistry = window.__lpRegistry || {};

