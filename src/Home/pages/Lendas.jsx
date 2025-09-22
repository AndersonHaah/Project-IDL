import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { BsChevronBarRight, BsChevronBarLeft } from "react-icons/bs";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style/Lendas.css'
import Imglendas from "./img/imglendas/Imglendas";

export default function Lendas() {
    const legends = [
        {
            name: 'Gustavo "Baiano" Gomes',
            img: Imglendas.Baiano,
            description: `
            A história desta lenda é uma prova de que a <strong>paixão pode mudar um cenário</strong>. Começando sua carreira como jogador profissional, Gustavo "Baiano" Gomes logo percebeu que seu verdadeiro talento estava em se <strong>conectar com a comunidade</strong>. 
            <br /><br />
            Com sua linguagem <strong>informal e carismática</strong>, Baiano conquistou o público com o quadro <strong>"Baianalista"</strong>, onde combinava <strong>humor, estratégia</strong> e <strong>insights valiosos</strong> sobre o cenário competitivo de League of Legends. A forma como interagia com a comunidade rapidamente o tornou uma das figuras mais queridas e respeitadas do esports brasileiro.  
            <br /><br />
            O sucesso foi tão grande que ele se uniu a outros parceiros para fundar a <strong>Ilha das Lendas</strong>, transformando um projeto pessoal em um verdadeiro <strong>império de conteúdo</strong>. A Ilha não só reúne ex-jogadores, streamers e criadores de conteúdo, mas também cria <strong>programas, análises</strong> e <strong>eventos</strong> que influenciam toda a comunidade de esports no Brasil.  
            <br /><br />
            Hoje, a Ilha é uma <strong>referência</strong>, e a jornada de Baiano inspira milhares de pessoas a criarem seu próprio caminho, mostrando que paixão, criatividade e dedicação podem transformar <strong>sonhos em realidade</strong>.
            `
        },
        {
            name: 'Eidi "eSA" Yanagimachi',
            img: Imglendas.Esa,
            description: `
            Nascido em <strong>09 de Março de 1994</strong>, natural do <strong>Japão</strong>, 
            André Eidi Yanagimachi Pavezi, mais conhecido como <strong>esA</strong>, se mudou para o Brasil bem cedo 
            e encontrou no <strong>League of Legends</strong> o caminho para construir sua carreira.
            <br />
            <br />
            Atuando como <strong>suporte</strong> e <strong>ADCarry</strong>, começou sua jornada no competitivo em 2014, e em 2015 se destacou 
            jogando pela <strong>Keyd Stars</strong>. Nos anos seguintes, passou por equipes como 
            <strong>Flamengo e-sports</strong>, <strong>Pain Gaming</strong>, consolidando seu nome no cenário.
            <br />
            <br />
            Reconhecido pela sua consistência e facilidade de adaptação, esA seguiu trilhando seu espaço até 
            migrar para a <strong>streaming</strong>, onde conquistou uma base de fãs fiéis. Essa nova fase o levou a se 
            unir ao <strong>Baiano</strong>, tornando-se parte essencial para a fundação da <strong>Ilha das Lendas</strong> 
            e reforçando o império de entretenimento que revolucionou a comunidade de LoL no Brasil.
            `
        },
        {
            name: 'Matheus “Mylon” Borges',
            img: Imglendas.Mylon,
            description: `
            Essa lenda se destacou como jogador profissional de <strong>League of Legends</strong>, atuando como top laner em equipes como <strong>Keyd Stars</strong> e <strong>paiN Gaming</strong>. Sua personalidade forte e seu estilo extremamente agressivo na lane, o fez conquistar vários títulos como top laner e ter uma participação icônica no <strong> Mundial de LoL de 2015 </strong>.
            <br>
            <br>
            Em 2017, aposentou-se do cenário competitivo e migrou para a <strong>transmissão oficial do CBLOL</strong> e <strong>criação de conteúdo</strong>, onde encontrou realmente a sua paixão, comentando campeonatos e compartilhando sua experiência com a comunidade.
            <br>
            <br>
            Após se aposentar da carreira competitiva e das transmissões oficiais, Mylon se juntou ao <strong>Ilha das Lendas</strong>, participando de programas como o <strong>Show do Mylão</strong>, <strong>DDC (Depois do Crime)</strong> e contribuindo para conteúdos sobre o cenário competitivo, consolidando-se como uma das principais figuras do cenário brasileiro de esports.
            `
        },
        {
            name: 'Filipe “Ranger” Brombilla',
            img: Imglendas.Ranger,
            description: `
            Essa lenda iniciou sua trajetória no cenário competitivo de <strong>League of Legends</strong> como Top Laner, porém ao passar do tempo transitou de lane para Jungler para poder impactar mais nas partidas.Teve várias passagens por equipes de peso, como <strong>KaBuM! Esports, Flamengo Esports, FURIA e Los Grandes.</strong>
            <br /><br />
            Além de seu desempenho como jogador, Ranger sempre demonstrou interesse em <strong>compreender o funcionamento das equipes</strong> e <strong>auxiliar no desenvolvimento de estratégias</strong>, o que naturalmente o aproximou do papel de <strong>mentor</strong> e <strong>analista</strong>. Sua capacidade de avaliar jogadas e identificar pontos fortes e fracos dos times chamou atenção de fãs e colegas do cenário.  
            <br /><br />
            Após se aposentar da carreira competitiva como proplayer, Ranger se juntou ao <strong>Ilha das Lendas</strong>, onde passou a contribuir para programas como <strong>"Goat ou Bagre"</strong> e <strong>"Depois do Crime"</strong>, analisando partidas e estratégias do CBLOL com um olhar técnico e preciso. Hoje, ele também atua como <strong>Head Coach</strong> da equipe <strong>KaBuM! Ilha das Lendas</strong>, auxiliando no desenvolvimento de novos talentos e na organização estratégica da equipe, mantendo um equilíbrio entre sua <strong> experiência competitiva </strong>e sua capacidade de <strong>transmitir conhecimento</strong>.
            `
        },
        {
            name: 'Gabriel “Minerva” Oliveira',
            img: Imglendas.Minerva,
            description: `
            Essa lenda escreveu seu nome na história do <strong>League of Legends brasileiro</strong> desde cedo, quando surpreendeu a todos como ADCarry da <strong>KaBuM! Esports</strong>, ajudando a conquistar títulos e marcando presença no <strong>Mundial de 2014</strong>, o primeiro de uma equipe brasileira.
            <br /><br />
            Ao longo da carreira, vestiu camisas como jungler de gigantes como <strong>paiN Gaming</strong>, <strong>CNB</strong> e <span class="rensga">Rensga</span>, <span class="rensga">e jogou ao lado de pessoas maravilhosas que irão marcar sua memoria para sempre como <strong>Trap</strong></span>, sempre carregando a fama de ser <strong>decisivo</strong> nos momentos de maior pressão. Sua habilidade em <strong>ditar o ritmo das partidas</strong> e sua <strong>personalidade marcante</strong> o transformaram em um dos nomes mais lembrados do cenário competitivo.
            <br /><br />
            Após se aposentar da carreira competitiva, Minerva deu um novo passo e se uniu ao <strong>Ilha das Lendas</strong>, levando sua bagagem de vitórias e experiências para programas de análise e entretenimento como <strong>"Gayssip"</strong> e <strong>"Kings Lendas"</strong>. Hoje, ele é mais do que um ex-jogador: é uma <strong class="rensga">voz de autoridade</strong> e ao mesmo tempo <strong>um ícone muito carismático</strong>, que conecta sua trajetória lendária ao futuro da <strong>LTA e da comunidade</strong>.
            `
        },
        {
            name: 'Lucas “Accez” Miranda',
            img: Imglendas.Accez,
            description: `
            Essa lenda começou sua caminhada no competitivo de <strong>League of Legends</strong> atuando como <strong>jungler</strong>, conquistando respeito por sua consistência em lane e pela forma inteligente com que se adaptava ao estilo de cada equipe. Passou por organizações como <strong>Pain Gaming Academy</strong>, <strong>ITZ Academy</strong> e finalmente promovido para o tier 1 na <strong>Liberty</strong>, sempre deixando sua marca como um jogador amigável e confiável.
            <br /><br />
            Mais do que um atleta, Accez mostrou ao longo da carreira sua capacidade de <strong>leitura de jogo</strong> e de <strong>construção de ambiente competitivo</strong>, características que chamaram a atenção da comunidade. Seu jeito tranquilo, mas competitivo, o transformou em uma figura querida pelos fãs e respeitada pelos colegas de profissão.
            <br /><br />
            Em 2024, juntou-se ao time academy do <strong>KaBbum Ilha das Lendas</strong>, e após o academy começou a fazer parte das transmissões ao vivo analisando as partidas.
        `
        },
        {
            name: 'Barbara “Jime” Prado',
            img: Imglendas.Jime,
            description: `
            Essa lenda se destacou como uma das figuras mais queridas e autênticas da comunidade de <strong>League of Legends</strong>. Iniciou sua carreira profissional com uma grande vitoria no campeonato GirlGamer em 2019 como Adcarry. Sua trajetória foi composta por times como <strong>i9</strong>, <strong>Red Academy</strong> e <strong>Raizen</strong> fez seu nome e sua trajetória em um cenário não tão incluso.
            <br /> <br/>
            Com sua comunicação <strong>leve e carismática</strong>, Jime conquistou o público não apenas pela paixão pelo jogo, mas também pela forma <strong>única de transmitir suas ideias e interagir com os fãs</strong>.
            <br /><br />
            No cenário, sempre buscou valorizar a <strong>representatividade</strong> e <strong>dar voz a diferentes perspectivas</strong>, criando um espaço de proximidade entre a <strong> comunidade e o competitivo</strong>. Seu trabalho a levou a participar de transmissões, análises e projetos que ampliaram o alcance do <strong>cenário competitivo</strong> e fortaleceram a cena inclusiva do lol brasileiro.
            <br /><br />
            Após sua passagem pelas transmissões oficiais, passou a integrar o <strong>Ilha das Lendas</strong>. Hoje, Jime é mais do que uma comentarista: é um <strong>símbolo de representatividade</strong> e uma <strong>ponte entre comunidade e competitivo</strong>, inspirando novas vozes a encontrarem seu espaço no cenário.
            `
        },
        {
            name: 'Bruno “Brucer” Pereira',
            img: Imglendas.Brucer,
            description: `
            Essa lenda construiu sua história no <strong>League of Legends brasileiro</strong> como um dos midlaners mais <strong>técnicos e consistentes do cenário</strong>. Ao longo de sua carreira, vestiu a camisa de grandes organizações como <strong>INTZ RED, RED Canids</strong> e <strong>Team One</strong>, se destacando pelo controle de rota, pela <strong>adaptabilidade com os campeões</strong> e <strong>pela frieza em momentos decisivos.</strong>
            <br /><br />
            Reconhecido pelo <strong>carisma e pela postura competitiva</strong>, Brucer foi peça fundamental em algumas campanhas de destaque no <strong>CBLOL</strong>, trazendo uma taça para sua estante no ano de 2017 pela <strong>Team One</strong>.
            <br /><br />
            Após sua passagem pelo competitivo, juntou-se ao <strong>Ilha das Lendas</strong>, levando sua <strong>experiência como pro player</strong> e <strong>seu carisma contagiante</strong> para programas de entretenimento e análise. Hoje, Brucer atua como <strong>criador de conteúdo</strong> e <strong>jornalista</strong> do Ilha das lendas, equilibrando sua <strong>vivência competitiva</strong> com a <strong>capacidade de cativar a comunidade e os pro players</strong>, e mantém viva sua influência no cenário.
            `
        },
        {
            name: 'Rodrigo  “Tay” Panisa',
            img: Imglendas.Tay,
            description: `
            Essa lenda marcou presença no competitivo de <strong>League of Legends</strong> como um dos jogadores mais <strong> versáteis e resistentes do cenário</strong>. Ao longo de sua carreira, passou por equipes como <strong>Pain Gaming, INTZ</strong> e <strong>LOUD</strong>, sempre se destacando pelo estilo <strong>aguerrido</strong> e <strong>pela capacidade de se adaptar às necessidades de cada time</strong>.
            <br /><br />
            Conhecido por sua postura <strong>determinada e pelo carisma fora de jogo</strong>, Tay conquistou o respeito de fãs e companheiros de equipe, tornando-se referência para muitos que sonham em trilhar o caminho do competitivo. Seu <strong>talento e dedicação</strong> o levaram a ganhar títulos importantes e a se firmar como um nome sólido dentro do <strong>CBLOL</strong>.
            <br /><br />
            Após sua passagem pelo competitivo, Tay passou a integrar o <strong>Ilha das Lendas</strong>, participando de programas analíticos e transmissões ao vivo. Hoje, ele combina sua <strong>experiência como pro player</strong> com sua <strong>personalidade marcante</strong>, sendo tanto uma voz de <strong>análise</strong> quanto um elo direto entre o <strong>competitivo e a comunidade</strong>.
            `

        },
        {
            name: 'Leticia "Rahkys" Soragni',
            img: Imglendas.Rahkys,
            description: `
            Essa lenda conquistou espaço no cenário de <strong>League of Legends</strong> como uma das vozes mais criativas e envolventes da comunidade. Com seu jeito <strong>autêntico e sua dedicação</strong>, Rahkys chamou muita atenção pela habilidade de transformar transmissões e análises em momentos <strong>leves e divertidos</strong>.
            <br /><br />
            Ao longo de sua trajetória, destacou-se por unir <strong>a sua animação</strong> e <strong>comunicação carismática</strong>, aproximando cada vez mais os seus fãs do ambiente competitivo. Essa combinação a tornou uma figura reconhecida e querida dentro do cenário.
            <br /><br />
            Após sua vitoria no campeonato Ignis, como ADCarry da Pain Gaming, Rahkys passou a fazer parte do <strong>Ilha das Lendas</strong>. Hoje, segue como <strong>criadora de conteúdo</strong> e <strong>streamer</strong>, equilibrando a paixão pelo jogo com a capacidade de <strong>inspirar novas vozes</strong> a se conectarem com o cenario de League of Legends.
            `
        },
        {
            name: 'Luis “Absolut” Carvalho',
            img: Imglendas.Absolut,
            description: `
            Essa lenda se consolidou no <strong>League of Legends brasileiro</strong> como um dos ADcarries mais <strong>respeitados e consistentes</strong> do cenário. Com passagens por equipes como <strong>Team One</strong>, <strong>Intz</strong> e <strong>Flamengo</strong>, Absolut mostrou ao longo da carreira um estilo de jogo <strong>agressivo, preciso</strong> e <strong>decisivo</strong> em momentos de pressão.
            <br /><br />
            Reconhecido pelo talento <strong>mecânico</strong> e pela <strong>inteligência dentro de jogo</strong>, construiu uma trajetória marcada por grandes atuações e pelo respeito de fãs e colegas de profissão. Sua <strong>postura competitiva</strong> e <strong>sua dedicação</strong> o transformaram em uma referência para aspirantes a atiradores no <strong>cenário competitivo</strong> e lhe trouxe vários titulos na sua carreira.
            <br /><br />
            Após finalizar sua carreira competitiva, Absolut criou sua propria co-stream voltada para analisar o competitivo brasileiro, e após isso, se juntou ao <strong>Ilha das Lendas</strong>, levando sua bagagem de ex-pro player e analista. Hoje, continua atuando como <strong>criador de conteúdo</strong> e <strong>analista</strong>, equilibrando sua <strong>experiência no competitivo</strong> com a capacidade de <strong>entreter e ajudar</strong> a comunidade.
            `
        },
        {
            name: 'Loic “Tucouille” Dubois',
            img: Imglendas.Tutuco,
            description: `
            Essa lenda é reconhecida nacionalmente como uma das maiores promessas a passar pelo <strong>League of Legends brasileiro</strong>. Vindo da França, Tucouille brilhou na <strong>Vivo Keyd Stars</strong>, onde rapidamente conquistou fãs pelo estilo agressivo, criatividade com campeões e sua paixão intensa pela cultura brasileira.
            <br /><br />
            Sua trajetória no Brasil deixou marcas não apenas pelo desempenho dentro de Summoner’s Rift, mas também pela <strong>conexão genuína</strong> que construiu com a comunidade, tornando-se um dos estrangeiros mais queridos a competir no <strong>cenário brasileiro</strong>.
            <br /><br />
            Diferente do que muitos pensam, Tucouille ainda é um player do time <strong>KBM Ilha das Lendas</strong>, porém participa das lives do IDL, principalmente de analise de campeonatos internacionais. Hoje, segue ajudando os players no time <strong>KBM Ilha das Lendas</strong> e <strong>analisa suas partidas</strong>, Tocouille equilibra sua <strong>experiência internacional</strong> com a vontade de <strong>fortalecer ainda mais a cena brasileira</strong>.
            `
        },

    ]

    return (
        <div className="legends-container">
            <div className="legend-container-primary">
                <iframe src="https://www.youtube.com/embed/J43UDAZDiOU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="video-legends"></iframe>

                <div className="legends-infos">
                    <h1>Explorando o Universo do Ilha das Lendas</h1>
                    <h2>Descubra cada lenda e sua história</h2>
                    <p>O Projeto Ilha das Lendas mergulha no mundo de League of Legends, apresentando as histórias, estratégias e curiosidades da maioria dos campeonatos. Explore os bastidores, acompanhe momentos épicos e conheça as lendas que conquistam a comunidade gamer.</p>

                </div>
            </div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Pagination]}

            >
                {legends.map((legends, index) => (
                    <SwiperSlide key={index} className='legend-container-secondary'>
                        <div className="legend-container-secondary">
                            <div className="bord-legend">
                                <img src={legends.img} alt="legend.name" className="bord-image-primary" />
                            </div>
                            <div className="legend-infos">
                                <h1>{legends.name}</h1>
                                <p dangerouslySetInnerHTML={{ __html: legends.description }} />

                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}