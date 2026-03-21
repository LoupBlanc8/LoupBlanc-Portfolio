import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Bitcoin, Coins } from 'lucide-react';
import TradingViewChart from '../components/TradingViewChart';
import { useDarkMode } from '../hooks/useDarkMode';

const bitcoinArticles = [
  {
    title: "Qu'est-ce que le Bitcoin ?",
    description: "Le Bitcoin est une monnaie numérique décentralisée créée en 2009 par Satoshi Nakamoto. Elle fonctionne sans autorité centrale grâce à la technologie blockchain.",
    url: "https://bitcoin.org/fr/",
    tag: "Fondamentaux"
  },
  {
    title: "La technologie Blockchain",
    description: "La blockchain est un registre distribué et immuable qui enregistre toutes les transactions Bitcoin de manière transparente et sécurisée.",
    url: "https://fr.wikipedia.org/wiki/Blockchain",
    tag: "Technologie"
  },
  {
    title: "Le Halving du Bitcoin",
    description: "Le halving réduit de moitié la récompense des mineurs tous les 210 000 blocs, créant une rareté programmée qui influence le cours du BTC.",
    url: "https://www.coindesk.com/learn/bitcoin-halving-explained/",
    tag: "Économie"
  },
  {
    title: "Lightning Network",
    description: "Solution de couche 2 qui permet des transactions Bitcoin quasi-instantanées et à faible coût, rendant le BTC viable pour les paiements quotidiens.",
    url: "https://lightning.network/",
    tag: "Innovation"
  },
  {
    title: "Régulation des cryptomonnaies",
    description: "Les gouvernements du monde entier développent des cadres réglementaires pour encadrer l'utilisation des cryptomonnaies, notamment le Bitcoin.",
    url: "https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/crypto-actifs",
    tag: "Régulation"
  },
  {
    title: "Bitcoin et environnement",
    description: "Le débat sur l'impact environnemental du minage de Bitcoin et les initiatives pour une transition vers des sources d'énergie renouvelables.",
    url: "https://www.cambridge.org/features/bitcoin-electricity-consumption",
    tag: "Environnement"
  },
  {
    title: "Bitcoin : réserve de valeur numérique",
    description: "Pourquoi le Bitcoin est comparé à l'or numérique et comment sa rareté programmée en fait une réserve de valeur face à l'inflation.",
    url: "https://www.investopedia.com/terms/b/bitcoin.asp",
    tag: "Économie"
  },
  {
    title: "Sécurité des portefeuilles Bitcoin",
    description: "Guide sur les différents types de portefeuilles (hot, cold, hardware) et les bonnes pratiques pour sécuriser ses bitcoins.",
    url: "https://bitcoin.org/fr/securiser-votre-portefeuille",
    tag: "Sécurité"
  },
  {
    title: "Les smart contracts sur Bitcoin",
    description: "Avec Taproot et les Ordinals, Bitcoin évolue au-delà du simple transfert de valeur pour supporter des contrats intelligents et des tokens.",
    url: "https://bitcoinmagazine.com/technical/what-is-taproot-bitcoin-upgrade",
    tag: "Innovation"
  },
  {
    title: "Minage de Bitcoin : fonctionnement",
    description: "Comment fonctionne le proof-of-work, le rôle des mineurs dans la sécurisation du réseau et l'évolution de la difficulté de minage.",
    url: "https://www.coindesk.com/learn/how-bitcoin-mining-works/",
    tag: "Technologie"
  },
  {
    title: "Bitcoin et adoption institutionnelle",
    description: "L'arrivée des ETF Bitcoin spot, l'adoption par les entreprises comme MicroStrategy et Tesla, et l'impact sur le marché.",
    url: "https://www.coindesk.com/learn/what-is-a-bitcoin-etf/",
    tag: "Économie"
  },
  {
    title: "Nostr : réseau social décentralisé",
    description: "Nostr est un protocole de communication décentralisé construit autour de Bitcoin et du Lightning Network pour un web libre et résistant à la censure.",
    url: "https://nostr.com/",
    tag: "Innovation"
  }
];

const goldArticles = [
  {
    title: "Qu'est-ce que l'or comme investissement ?",
    description: "L'or est un métal précieux utilisé depuis des millénaires comme réserve de valeur. Il reste un actif refuge privilégié en période d'incertitude économique.",
    url: "https://www.investopedia.com/articles/basics/08/invest-in-gold.asp",
    tag: "Fondamentaux"
  },
  {
    title: "L'or et l'inflation",
    description: "Historiquement, l'or est considéré comme une couverture contre l'inflation, conservant son pouvoir d'achat quand les monnaies fiduciaires se déprécient.",
    url: "https://www.worldgoldcouncil.org/gold-investor/gold-and-inflation",
    tag: "Économie"
  },
  {
    title: "Le marché de l'or physique",
    description: "Guide complet sur l'achat d'or physique : lingots, pièces, certifications et précautions à prendre pour un investissement sécurisé.",
    url: "https://or.fr/cours/or",
    tag: "Investissement"
  },
  {
    title: "Les ETF adossés à l'or",
    description: "Les fonds négociés en bourse adossés à l'or permettent de s'exposer au cours du métal jaune sans détenir d'or physique.",
    url: "https://www.investopedia.com/articles/investing/122515/gld-vs-iau-comparing-gold-etfs.asp",
    tag: "Finance"
  },
  {
    title: "Or vs Bitcoin : réserve de valeur",
    description: "Comparaison entre l'or traditionnel et le Bitcoin comme réserves de valeur : volatilité, rendement historique et adoption institutionnelle.",
    url: "https://www.coindesk.com/learn/gold-vs-bitcoin/",
    tag: "Analyse"
  },
  {
    title: "Les banques centrales et l'or",
    description: "Pourquoi les banques centrales accumulent des réserves d'or record et quel impact cela a sur le cours mondial du métal précieux.",
    url: "https://www.worldgoldcouncil.org/gold-investor/central-bank-gold-reserves",
    tag: "Économie"
  },
  {
    title: "Le minage de l'or",
    description: "Processus d'extraction, impacts environnementaux et innovations technologiques dans l'industrie minière aurifère mondiale.",
    url: "https://www.worldgoldcouncil.org/gold-supply/gold-mining",
    tag: "Industrie"
  },
  {
    title: "L'or en France : fiscalité",
    description: "Cadre fiscal de l'investissement en or en France : taxe forfaitaire, plus-values, et obligations déclaratives pour les particuliers.",
    url: "https://www.service-public.fr/particuliers/vosdroits/F31266",
    tag: "Régulation"
  },
  {
    title: "Les facteurs qui influencent le cours de l'or",
    description: "Taux d'intérêt, dollar américain, géopolitique, demande joaillière : les principaux facteurs qui déterminent le prix de l'or.",
    url: "https://www.bullionvault.fr/guide-or/cours-or",
    tag: "Analyse"
  }
];

const ArticleCard: React.FC<{ article: typeof bitcoinArticles[0], type: 'bitcoin' | 'gold' }> = ({ article, type }) => {
  const gradient = type === 'bitcoin' 
    ? 'linear-gradient(135deg, rgba(247, 147, 26, 0.05) 0%, rgba(255, 193, 7, 0.05) 100%)'
    : 'linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 160, 0, 0.05) 100%)';
  
  const accentColor = type === 'bitcoin' ? '#f7931a' : '#ffd700';

  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="minimal-card"
      style={{ 
        padding: '2rem', 
        textDecoration: 'none', 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%',
        background: `var(--card-bg) ${gradient}`,
        border: '1px solid var(--border-color)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      whileHover={{ y: -5, boxShadow: `0 10px 30px ${accentColor}15`, borderColor: accentColor }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <span className="sub-title" style={{ fontSize: '0.7rem', color: accentColor, opacity: 0.8 }}>{article.tag}</span>
        <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
      </div>
      <h3 className="serif" style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{article.title}</h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1 }}>{article.description}</p>
      <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', color: accentColor }}>CONSULTER →</div>
    </motion.a>
  );
};

const Veille: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bitcoin' | 'gold'>('bitcoin');
  const { isDark } = useDarkMode();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: '1200px', margin: '0 auto' }}
    >
      <header style={{ marginBottom: '6vh' }}>
        <span className="sub-title">Veille technologique & Marchés</span>
        <h1 className="section-title" style={{ marginBottom: 0 }}>INTELLIGENCE <span className="italic" style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>active</span>.</h1>
      </header>

      <div style={{ marginBottom: '4rem' }}>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', maxWidth: '850px' }}>
          En tant que futur expert SLAM, comprendre l'intersection entre la finance et la technologie est crucial. 
          De la tokenisation d'actifs réels à l'automatisation de flux financiers, cette veille technologique 
          permet d'anticiper les prochaines révolutions logicielles et l'adoption globale du Web3.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <button 
          onClick={() => setActiveTab('bitcoin')}
          style={{ 
            background: 'none', 
            border: 'none', 
            padding: '0 0 1rem 0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: activeTab === 'bitcoin' ? 'var(--text-color)' : 'var(--text-muted)',
            fontWeight: activeTab === 'bitcoin' ? 600 : 400,
            position: 'relative'
          }}
        >
          <Bitcoin size={20} />
          {activeTab === 'bitcoin' && <motion.div layoutId="tab-active" style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: 2, background: 'var(--accent-color)' }} />}
          ECOSYSTÈME BITCOIN
        </button>
        <button 
          onClick={() => setActiveTab('gold')}
          style={{ 
            background: 'none', 
            border: 'none', 
            padding: '0 0 1rem 0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: activeTab === 'gold' ? 'var(--text-color)' : 'var(--text-muted)',
            fontWeight: activeTab === 'gold' ? 600 : 400,
            position: 'relative'
          }}
        >
          <Coins size={20} />
          {activeTab === 'gold' && <motion.div layoutId="tab-active" style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: 2, background: 'var(--accent-color)' }} />}
          MARCHÉ DE L'OR
        </button>
      </div>

      {/* Market Chart Section */}
      <motion.div
        key={`chart-${activeTab}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ marginBottom: '4rem' }}
      >
        <TradingViewChart 
          symbol={activeTab === 'bitcoin' ? "BINANCE:BTCUSDT" : "OANDA:XAUUSD"} 
          theme={isDark ? 'dark' : 'light'} 
        />
      </motion.div>

      {/* Articles Grid */}
      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '2rem',
          paddingBottom: '5rem' 
        }}
      >
        {(activeTab === 'bitcoin' ? bitcoinArticles : goldArticles).map((article, idx) => (
          <ArticleCard key={idx} article={article} type={activeTab} />
        ))}
      </motion.div>

      <style>{`
        .spin { animation: rotate 1s linear infinite; }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .hover-accent:hover { color: var(--accent-color) !important; }
      `}</style>
    </motion.div>
  );
};

export default Veille;
