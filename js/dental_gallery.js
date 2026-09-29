document.addEventListener("DOMContentLoaded", async function () {
    const container = document.getElementById("galleryContainer");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    
    let totalImages = 0;
    let imagesPerLoad = 8;
    let currentShown = 0;

    try {
        const response = await fetch("assets/images/dental_gallery/gallery-config.json");
        if (!response.ok) throw new Error("Nelze načíst konfiguraci galerie.");
        
        const config = await response.ok ? await response.json() : null;
        totalImages = config.totalImages;
        imagesPerLoad = config.imagesPerLoad;
    } catch (error) {
        console.error("Chyba při načítání konfigurace:", error);
        totalImages = 8; 
        imagesPerLoad = 4;
    }

    function loadImages() {
        if (totalImages === 0) return;

        let targetLoad = currentShown + imagesPerLoad;

        for (let i = totalImages - currentShown; i > totalImages - targetLoad && i > 0; i--) {
            const a = document.createElement("a");
            a.href = `assets/images/dental_gallery/foto_${i}.webp`;
            a.target = "_blank";
            a.className = "gallery-item";

            const img = document.createElement("img");
            img.src = `assets/images/dental_gallery/foto_${i}.webp`;
            img.alt = `Ukázka práce ${i}`;
            img.loading = "lazy";

            a.appendChild(img);
            container.append(a);
            currentShown++;
        }

        if (currentShown >= totalImages) {
            loadMoreBtn.style.display = "none";
        }
    }

    loadImages();

    loadMoreBtn.addEventListener("click", loadImages);
});