import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";
import "./assets/pico.colors.css";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { useEffect, useState } from "react";

const STORAGE_KEY = 'recent-urls';
const MAX_ITEMS = 5;

function App() {
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    const storedUrls = localStorage.getItem(STORAGE_KEY);
    if (storedUrls) {
      setUrls(JSON.parse(storedUrls));
    }
  }, []);

  const saveUrls = (newUrls: string[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUrls));
    setUrls(newUrls);
  };

  const handleGo = async () => {
    const urlInput = document.getElementById('url-input') as HTMLInputElement;
    const url = urlInput?.value;
    if (!url) return;

    try {
      const validatedUrl = new URL(url);
      
      // Adicionar URL ao histórico
      const newUrls = [validatedUrl.href, ...urls.filter(u => u !== validatedUrl.href)];
      if (newUrls.length > MAX_ITEMS) {
        newUrls.pop(); // Remove o mais antigo
      }
      saveUrls(newUrls);
      
      // Limpar input
      urlInput.value = '';
      
      // Navegar para a URL
      await getCurrentWindow().setIgnoreCursorEvents(true);
      window.location.href = validatedUrl.href;
    } catch (error) {
      console.error('Invalid URL', error);
      return;
    }
  }

  const handleCardClick = async (url: string) => {
    try {
      await getCurrentWindow().setIgnoreCursorEvents(true);
      window.location.href = url;
    } catch (error) {
      console.error('Error navigating to URL', error);
    }
  };

  const handleDelete = (urlToDelete: string) => {
    const newUrls = urls.filter(url => url !== urlToDelete);
    saveUrls(newUrls);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col h-screen">
        <div className="p-4">
          <input
            id="url-input"
            placeholder="Enter a URL..."
          />
          <button className="w-full" onClick={handleGo}>Go</button>
        </div>

        <div className="px-4 min-h-0 flex-1">
          <div className="flex flex-col gap-2">
            {urls.map((url) => (
              <Card 
                key={url}
                url={url}
                onClick={() => handleCardClick(url)}
                onDelete={() => handleDelete(url)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
