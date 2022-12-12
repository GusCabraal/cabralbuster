import { QueryInterface, DataTypes } from 'sequelize'

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert('movies', [
            {
                name: 'Pulp Fiction: Tempo de Violência',
                description:
                    'Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle.',
                release_year: 1994,
                imdb_rating: 8.9,
                director_id: 1,
                category_id: 1,
                image: 'http://localhost:3001/images/Pulp_Fiction_cover.jpg',
            },
            {
                name: 'E.T. O Extraterrestre',
                description:
                    'O garoto Elliott faz amizade com um pequeno alienígena inofensivo que está bem longe do seu planeta. Ele decide manter a adorável criatura em segredo e em casa após apresentá-la aos irmãos.',
                release_year: 1982,
                imdb_rating: 7.9,
                director_id: 3,
                category_id: 3,
                image: 'http://localhost:3001/images/ET_O_Extraterrestre.jpg',
            },
            {
                name: 'Curtindo a Vida Adoidado',
                description:
                    'O adolescente Ferris Bueller decide sair da rotina e engana seus pais fingindo estar doente para poder matar aula. Ele convence sua namorada, Sloane, e seu melhor amigo, Cameron, a se juntar a ele no passeio até Chicago, usando a Ferrari do pai de Cameron. No entanto, o diretor da escola sabe que Ferris está mentindo e vai atrás dele.',
                release_year: 1986,
                imdb_rating: 7.8,
                director_id: 8,
                category_id: 6,
                image: 'http://localhost:3001/images/curtindo.jpg',
            },
            {
                name: 'Tubarão',
                description:
                    'Um terrível ataque a banhistas é o sinal de que a praia da pequena cidade de Amity, na Nova Inglaterra, virou refeitório de um gigantesco tubarão branco. O chefe de polícia Martin Brody quer fechar as praias, mas o prefeito Larry Vaughn não permite, com medo de que o faturamento com a receita dos turistas deixe a cidade sem recursos. O cientista Matt Hooper e o pescador Quint se oferecem para ajudar Brody a capturar e matar a fera, mas a missão vai ser mais complicada do que eles imaginavam.',
                release_year: 1975,
                imdb_rating: 8.1,
                director_id: 3,
                category_id: 4,
                image: 'http://localhost:3001/images/tubarao.jpg',
            },
            {
                name: 'Clube dos Cinco',
                description:
                    'Cinco adolescentes do ensino médio cometem pequenos delitos na escola. Os estudantes são punidos e precisam passar o sábado na biblioteca do colégio escrevendo uma redação contando o que pensam de si mesmos. O grupo reúne jovens com perfis completamente diferentes: o popular, a patricinha, a esquisita, o nerd e o rebelde. No decorrer do dia, eles passam a se conhecer melhor e a aceitar suas diferenças, compartilhando seus maiores segredos.',
                release_year: 1985,
                imdb_rating: 7.8,
                director_id: 8,
                category_id: 6,
                image: 'http://localhost:3001/images/clube_dos_cinco.jpeg',
            },
            {
                name: 'O Exterminador do Futuro 2 - O Julgamento Final',
                description:
                    'O jovem John Connor é a chave para a vitória da civilização sobre uma rebelião de robôs do futuro. No entanto, ele torna-se alvo de T-1000, um exterminador que pode assumir a forma que desejar e que foi enviado do futuro para matá-lo. Outro exterminador, o renovado T-800, também é enviado de volta ao passado para proteger o menino. Quando John e sua mãe embarcam na fuga com T-800, o menino cria um vínculo forte e inesperado com o robô.',
                release_year: 1991,
                imdb_rating: 8.6,
                director_id: 4,
                category_id: 3,
                image: 'http://localhost:3001/images/terminator_2.jpg',
            },
            {
                name: 'Taxi Driver – Motorista de Táxi',
                description:
                    'O motorista de táxi de Nova York Travis Bickle, veterano da Guerra do Vietnã, reflete constantemente sobre a corrupção da vida ao seu redor e sente-se cada vez mais perturbado com a própria solidão e alienação. Apesar de não conseguir fazer contato emocional com ninguém e viver uma vida questionável em busca de diversão, ele se torna obcecado em ajudar uma prostituta de 12 anos que entra em seu táxi para fugir de um cafetão.',
                release_year: 1976,
                imdb_rating: 8.2,
                director_id: 2,
                category_id: 2,
                image: 'http://localhost:3001/images/Taxi_Driver.jpg',
            },
            {
                name: 'Cidade de Deus',
                description:
                    'Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.',
                release_year: 2002,
                imdb_rating: 8.6,
                director_id: 5,
                category_id: 2,
                image: 'http://localhost:3001/images/CidadedeDeus.jpg',
            },
            {
                name: 'O Iluminado',
                description:
                    'Jack Torrance se torna caseiro de inverno do isolado Hotel Overlook, nas montanhas do Colorado, na esperança de curar seu bloqueio de escritor. Ele se instala com a esposa Wendy e o filho Danny, que é atormentando por premonições. Jack não consegue escrever e as visões de Danny se tornam mais perturbadoras. O escritor descobre os segredos sombrios do hotel e começa a se transformar em um maníaco homicida, aterrorizando sua família.',
                release_year: 1980,
                imdb_rating: 8.4,
                director_id: 6,
                category_id: 5,
                image: 'http://localhost:3001/images/O_iluminado.jpg',
            },
            {
                name: '2001 - Uma Odisseia no Espaço',
                description:
                    'Uma estrutura imponente preta fornece uma conexão entre o passado e o futuro nesta adaptação enigmática de um conto reverenciado de ficção científica do autor Arthur C. Clarke. Quando o Dr. Dave Bowman e outros astronautas são enviados para uma misteriosa missão, os chips de seus computadores começam a mostrar um comportamento estranho, levando a um tenso confronto entre homem e máquina que resulta em uma viagem alucinante no espaço e no tempo.',
                release_year: 1968,
                imdb_rating: 8.3,
                director_id: 6,
                category_id: 3,
                image: 'http://localhost:3001/images/quadro-poster-c-moldura-2001-uma-odisseia-no-espaco-kubrick-quadros.jpg',
            },
            {
                name: 'Laranja Mecânica',
                description:
                    'O jovem Alex passa as noites com uma gangue de amigos briguentos. Depois que é preso, se submete a uma técnica de modificação de comportamento para poder ganhar sua liberdade.',
                release_year: 1971,
                imdb_rating: 8.3,
                director_id: 6,
                category_id: 2,
                image: 'http://localhost:3001/images/laranja_mecanica.jpg',
            },
            {
                name: 'Touro Indomável',
                description:
                    'O filme conta a história de um boxeador de peso médio e suas vitórias até ter a sua primeira oportunidade de ser campeão da sua categoria. Ele se apaixona por uma linda garota do Bronx, mas a incapacidade de expressar seus sentimentos eventualmente atrapalha sua vida profissional, o que lhe custa tudo.',
                release_year: 1980,
                imdb_rating: 8.2,
                director_id: 2,
                category_id: 2,
                image: 'http://localhost:3001/images/touro_indomavel.jpg',
            },
            {
                name: 'Cães de Aluguel',
                description:
                    'Criminoso reúne seis bandidos para grande roubo de diamantes. Algo sai errado e um deles é ferido durante roubo e os bandidos precisam descobrir quem foi que os traiu, o que gera enorme tensão no grupo e enfraquece a todos.',
                release_year: 1992,
                imdb_rating: 8.3,
                director_id: 1,
                category_id: 1,
                image: 'http://localhost:3001/images/caes_de_aluguel.jpg',
            },
            {
                name: 'Top Gun - Ases Indomáveis',
                description:
                    'A escola naval de pilotos é onde o melhor dos melhores treinam para refinar suas habilidades de voo de elite. Quando o piloto Maverick é enviado para a escola, sua atitude irresponsável e comportamento arrogante o colocam em desacordo com os outros pilotos, especialmente Iceman. Porém Maverick não está apenas competindo para ser o piloto superior de caça, ele também está lutando pela atenção de sua bonita instrutora de voo, Charlotte Blackwood.',
                release_year: 1986,
                imdb_rating: 6.9,
                director_id: 7,
                category_id: 1,
                image: 'http://localhost:3001/images/top_gun.jpeg',
            },
        ])
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('movies', {})
    },
}
