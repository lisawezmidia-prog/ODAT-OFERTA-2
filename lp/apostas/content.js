/**
 * LP MODULE — ODAT
 * ─────────────────────────────────────────────────────────────
 * Personalização textual injetada dinamicamente na estrutura Apple.
 * A estrutura original HTML e CSS não é alterada.
 * Substitua os valores abaixo para personalizar este hábito.
 * ─────────────────────────────────────────────────────────────
 */

(function() {
    var lpConfig = {
        // #section-description
        get secDescTitle() {
            document.querySelectorAll('img[alt="ODAT App Mockup"]').forEach(function(el) { el.src = 'odat-dual-mockup18.png'; });
            document.querySelectorAll('img[alt="ODAT Evolution Mockup"]').forEach(function(el) { el.src = 'odat-dual-mockup19.png'; });
            return 'Recupere sua estabilidade. <span style="color: var(--blue);">Uma escolha de cada vez.</span>';
        },
        secDescText:  '<span style="color: #fff;">O controle financeiro começa em pequenas decisões.</span><br><span style="color: #fff;">ODAT</span> transforma impulsos financeiros em consciência diária. Um sistema criado para ajudar você a recuperar clareza, controle e estabilidade emocional.',

        // #section-2
        sec2Title: 'As apostas não tiram só dinheiro.',
        sec2Sub1:  'Com o tempo, o impulso começa a controlar suas decisões antes da razão.',
        sec2Sub2:  'Sem uma estrutura real, o ciclo da impulsividade sempre recomeça.',
        sec2Highlight: 'E cada recaída silenciosa destrói mais um pouco da sua confiança.',

        // #section-3
        sec3Title: 'Você não precisa enfrentar isso escondido.',
        sec3Sub1:  'O impulso mais perigoso quase sempre aparece quando ninguém percebe.',
        sec3Label: 'SISTEMA QUE INTERROMPE O IMPULSO ANTES DA PERDA',
        sec3Sub2:  'Intervenções inteligentes antes que o impulso financeiro assuma o controle.',
        sec3Sub3:  'ODAT identifica padrões emocionais antes que eles se transformem em novas perdas.',
        sec3Sub4:  'Ações discretas criadas para interromper o ciclo antes da próxima aposta.',

        // #section-benefits-extra
        secExtra1: 'Mais controle.',
        secExtra2: 'Menos impulsividade.',

        // #section-4
        sec4Title: 'Ajuda real quando a ansiedade aumenta.',
        sec4Sub1:  'Conecte pessoas que ajudam você a permanecer lúcido.<br>Tenha acesso imediato a apoio especializado.',
        sec4Sub2:  'Uma estrutura criada para impedir que você enfrente tudo sozinho.',
        sec4Sub3:  'As perdas quase sempre começam em silêncio.',
        sec4Sub4:  'Mas a recuperação também pode começar assim.',

        // #section-emotional-universal
        secUnivTitle: 'Muitas vezes, o problema nunca foi apenas dinheiro.',
        secUnivText:  '<span style="color: #fff;">ODAT</span> foi criado para ajudar pessoas a recuperar clareza emocional, controle financeiro e estabilidade antes que impulsos destruam partes importantes da própria vida.',
        secUnivLabel: 'MAIS CONTROLE. TODOS OS DIAS.',

        // #section-5
        sec5Title: 'O controle volta a ser visível.',
        sec5Text:  'Acompanhe em tempo real quanto dinheiro, estabilidade e tranquilidade você começa a recuperar.',

        // #section-6
        sec6Title: 'Cada decisão consciente fortalece você.',
        sec6Text:  'Você não está apenas interrompendo apostas.<br>Está reconstruindo estabilidade, disciplina e confiança em si mesmo.',
        sec6Sub1:  'Menos impulsividade. Mais clareza.',
        sec6Sub2:  'Menos ansiedade. Mais controle.',

        // #section-7
        sec7Text:  '<span style="color: var(--white);">O problema nunca foi apenas o dinheiro perdido.</span><br>Você perde paz, estabilidade, clareza e confiança em si mesmo aos poucos.'

,
        // .result-message
        resMsg1: 'A ansiedade nunca termina quando a aposta acaba.',
        resMsg2: 'Mais estabilidade.<br>Menos impulsividade.',
        resMsg3: 'Dormir sem desespero financeiro.<br>Parar de viver esperando recuperar perdas.',
        resMsg4: 'Voltar a sentir paz nas próprias decisões.'
    };

    window.__lpRegistry = window.__lpRegistry || {};
    window.__lpRegistry['Apostas'] = lpConfig;
})();

