# Mikail Lekesiz - Portfolyo Web Sitesi

## 🎯 Proje Özeti

Bu proje, Mikail Lekesiz için modern, responsive ve çok dilli bir portfolyo web sitesidir. Site, https://wholivesonmars.github.io/portfolio/ örneğinden esinlenilerek siyah, beyaz ve gri tonlarında minimalist bir tasarımla oluşturulmuştur.

## ✨ Özellikler

### Tasarım
- **Renk Şeması:** Siyah, beyaz, gri tonları
- **Responsive:** Mobil ve masaüstü uyumlu
- **Animasyonlar:** Smooth scroll, fade-in, hover efektleri
- **Modern UI:** Temiz, minimalist ve profesyonel görünüm

### Çok Dilli Destek
- 🇫🇷 **Fransızca** (Varsayılan)
- 🇬🇧 **İngilizce**
- 🇹🇷 **Türkçe**

### Bölümler
1. **Hero Section:** Profil fotoğrafı, tanıtım metni, CTA butonları
2. **Hakkımda:** Kişisel ve profesyonel tanıtım
3. **Hizmetler:** 6 hizmet kartı (DevOps, Full Stack, AI, Cybersecurity, vb.)
4. **Yetenekler:** Kategorize edilmiş teknolojiler (Languages, Frontend, Backend, Databases, DevOps, Tools)
5. **Deneyim:** İş geçmişi (Netz Informatique, IBM, Microsoft)
6. **Eğitim:** Akademik geçmiş ve sertifikalar
7. **Sertifikalar:** Profesyonel sertifikalar
8. **Projeler:** GitHub ve canlı projeler
9. **İletişim:** Fransa ve Türkiye iletişim bilgileri

### Teknik Özellikler
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Animasyonlar:** Framer Motion
- **Icons:** Lucide React
- **UI Components:** shadcn/ui

## 📁 Proje Yapısı

```
mikail-portfolio/
├── src/
│   ├── assets/
│   │   └── mikail_lekesiz.png          # Profil fotoğrafı
│   ├── components/
│   │   └── ui/                         # UI bileşenleri
│   ├── lib/
│   │   └── translations.js             # Çok dilli içerik
│   ├── App.jsx                         # Ana uygulama
│   ├── App.css                         # Stil dosyası
│   └── main.jsx                        # Giriş noktası
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+
- pnpm (veya npm/yarn)

### Kurulum
```bash
cd mikail-portfolio
pnpm install
```

### Geliştirme Modu
```bash
pnpm run dev
```
Tarayıcıda http://localhost:5173 adresini açın.

### Production Build
```bash
pnpm run build
```
Build dosyaları `dist/` klasöründe oluşturulur.

### Preview
```bash
pnpm run preview
```

## 📝 İçerik Güncelleme

### Çevirileri Düzenleme
`src/lib/translations.js` dosyasını düzenleyin. Her dil için ayrı objeler mevcuttur:
- `fr`: Fransızca
- `en`: İngilizce
- `tr`: Türkçe

### Profil Fotoğrafı Değiştirme
`src/assets/mikail_lekesiz.png` dosyasını değiştirin.

### Yetenekler Ekleme/Çıkarma
`App.jsx` dosyasında `skills` objesini düzenleyin.

### Projeler Ekleme
`translations.js` dosyasında her dil için `projects.list` dizisine yeni proje ekleyin.

## 🌐 Sosyal Medya Linkleri

Sitede aşağıdaki sosyal medya hesapları bağlıdır:
- GitHub: https://github.com/lekesiz
- LinkedIn: https://www.linkedin.com/in/mikail-lekesiz/
- Twitter: https://x.com/lekesiz_mikail
- Instagram: https://www.instagram.com/lekesizmikail
- YouTube: https://www.youtube.com/@mlekesiz

## 📧 İletişim Bilgileri

### Fransa
- **E-posta:** contact@netzinformatique.fr
- **Telefon:** https://mikail.net/contact/
- **Adres:** 2 rue des Tulipes, 67500 HAGUENAU, France

### Türkiye
- **E-posta:** https://mikail.net/contact/
- **Telefon:** https://mikail.net/contact/
- **Adres:** Tepeköy Mahallesi, Çengel Çeşme Caddesi No: 44, 59800 Şarköy / Tekirdağ

## 🎨 Özelleştirme

### Renk Değiştirme
`App.css` ve Tailwind sınıflarını düzenleyerek renkleri özelleştirebilirsiniz.

### Yeni Bölüm Ekleme
1. `App.jsx` dosyasına yeni section ekleyin
2. `translations.js` dosyasına çevirileri ekleyin
3. Navigasyona yeni menü öğesi ekleyin

## 📦 Kullanılan Paketler

- react: ^18.3.1
- react-dom: ^18.3.1
- framer-motion: ^11.18.0
- lucide-react: ^0.469.0
- tailwindcss: ^3.4.17
- vite: ^6.3.5

## 🔧 Sorun Giderme

### Build Hatası
```bash
rm -rf node_modules
pnpm install
pnpm run build
```

### Animasyonlar Çalışmıyor
Framer Motion'ın doğru yüklendiğinden emin olun:
```bash
pnpm add framer-motion
```

## 📄 Lisans

© 2025 Mikail Lekesiz. Tüm hakları saklıdır.

## 🤝 Katkıda Bulunma

Bu proje kişisel bir portfolyo sitesidir. Önerileriniz için iletişime geçebilirsiniz.

---

**Geliştirme Tarihi:** Ekim 2025  
**Geliştirici:** Manus AI Agent  
**Müşteri:** Mikail Lekesiz
