import { useState, useEffect } from 'react';

export interface GoldPriceData {
  price: number;
  name: string;
  symbol: string;
  updatedAt: string;
  updatedAtReadable: string;
}


export const useGoldPrice = () => {
  const [data, setData] = useState<GoldPriceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrice = async () => {
    try {
      setLoading(true);
      // Utilisation de l'API gold-api.com sans clé
      const response = await fetch('https://api.gold-api.com/price/XAU');
      if (!response.ok) throw new Error('Erreur réseau');
      const json = await response.json();
      setData(json);
      setError(null);
    } catch (err) {
      setError("Impossible de charger les données en temps réel.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error, refetch: fetchPrice };
};
