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
            document.querySelectorAll('img[alt="ODAT App Mockup"]').forEach(function(el) { el.src = 'odat-dual-mockup24.png'; });
            document.querySelectorAll('img[alt="ODAT Evolution Mockup"]').forEach(function(el) { el.src = 'odat-dual-mockup25.png'; });
            return 'Recupere sua disposição. <span style="color: var(--blue);">Uma escolha de cada vez.</span>';
        },
        secDescText:  '<span style="color: #fff;">Seu corpo sente cada decisão repetida diariamente.</span><br><span style="color: #fff;">ODAT</span> transforma impulsos automáticos em consciência diária. Um sistema criado para ajudar você a recuperar energia, equilíbrio e controle sobre sua rotina.',

        // #section-2
        sec2Title: 'O fast food nunca foi só sobre fome.',
        sec2Sub1:  'Com o tempo, o automático começa a decidir antes da consciência.',
        sec2Sub2:  'Sem uma estrutura real, o ciclo da compulsão sempre recomeça.',
        sec2Highlight: 'E cada repetição silenciosa faz você acreditar menos na própria disciplina.',

        // #section-3
        sec3Title: 'Você não precisa enfrentar isso sozinho.',
        sec3Sub1:  'O impulso mais forte quase sempre aparece no cansaço, na correria ou no vazio.',
        sec3Label: 'SISTEMA QUE INTERROMPE O AUTOMÁTICO ANTES DO EXCESSO',
        sec3Sub2:  'Intervenções inteligentes antes que o impulso assuma o controle.',
        sec3Sub3:  'ODAT identifica padrões emocionais antes que eles se transformem em excesso.',
        sec3Sub4:  'Ações discretas criadas para interromper decisões automáticas antes da próxima escolha impulsiva.',

        // #section-benefits-extra
        secExtra1: 'Mais equilíbrio.',
        secExtra2: 'Menos compulsão.',

        // #section-4
        sec4Title: 'Ajuda real nos momentos mais difíceis.',
        sec4Sub1:  'Conecte pessoas que apoiam sua recuperação.<br>Tenha acesso imediato a suporte especializado.',
        sec4Sub2:  'Uma estrutura criada para impedir que você enfrente isso sozinho.',
        sec4Sub3:  'O excesso quase sempre começa no automático.',
        sec4Sub4:  'Mas sua recuperação também pode começar assim.',

        // #section-emotional-universal
        secUnivTitle: 'Muitas vezes, o problema nunca foi apenas comida.',
        secUnivText:  '<span style="color: #fff;">ODAT</span> foi criado para ajudar pessoas a recuperar energia, equilíbrio e controle antes que hábitos automáticos consumam saúde e autoestima.',
        secUnivLabel: 'MAIS EQUILÍBRIO. TODOS OS DIAS.',

        // #section-5
        sec5Title: 'O progresso volta a ser visível.',
        sec5Text:  'Acompanhe em tempo real quanto energia, disposição e equilíbrio você começa a recuperar diariamente.',

        // #section-6
        sec6Title: 'Cada escolha consciente fortalece você.',
        sec6Text:  'Você não está apenas reduzindo excessos.<br>Está reconstruindo disciplina, equilíbrio e controle sobre sua própria rotina.',
        sec6Sub1:  'Menos automático. Mais consciência.',
        sec6Sub2:  'Menos excesso. Mais equilíbrio.',

        // #section-7
        sec7Text:  '<span style="color: var(--white);">O problema nunca foi apenas alimentação.</span><br>Você perde disposição, energia, autoestima e equilíbrio aos poucos.'

,
        // .result-message
        resMsg1: 'O vazio emocional nunca é saciado por impulso.',
        resMsg2: 'Mais disposição.<br>Menos excessos automáticos.',
        resMsg3: 'Sentir controle sobre o próprio corpo.<br>Parar de descontar emoções na comida.',
        resMsg4: 'Voltar a sentir orgulho da própria rotina.'
    };

    window.__lpRegistry = window.__lpRegistry || {};
    window.__lpRegistry['Fast Food'] = lpConfig;
})();

