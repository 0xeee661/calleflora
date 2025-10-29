# 🎬 Scripts de Optimización de Videos

## Script de Conversión: `convert-videos-to-web-format.sh`

### 📋 Descripción

Convierte automáticamente todos los videos del proyecto a formato **MP4 H.264**, garantizando compatibilidad universal con:

- ✅ iPhone (Safari + Chrome)
- ✅ iPad (Safari + Chrome)  
- ✅ Android (Chrome + Samsung Browser)
- ✅ Desktop (Todos los navegadores modernos)

### 🔧 Requisitos Previos

**Instalar FFmpeg:**

```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt-get update && sudo apt-get install ffmpeg

# Windows (con Chocolatey)
choco install ffmpeg
```

### 🚀 Uso

#### Opción 1: Conversión Básica (Solo videos incompatibles)

```bash
cd /Users/esauguerra/Desktop/colorads/calle-flora

# Ejecutar script
./scripts/convert-videos-to-web-format.sh
```

Esto convertirá automáticamente:
- ❌ `home.mov` → ✅ `home.mp4`
- ❌ `fachada-espacios.mp4` (QuickTime) → ✅ `fachada-espacios.mp4` (H.264)

#### Opción 2: Reconversión Completa (Todos los videos)

Si deseas optimizar TODOS los videos para máxima compatibilidad:

```bash
./scripts/convert-videos-to-web-format.sh
# Cuando pregunte si deseas reconvertir todos, responde: y
```

### ⚙️ Especificaciones Técnicas

El script genera videos con estas características:

| Parámetro | Valor | Razón |
|-----------|-------|-------|
| **Codec de Video** | H.264 (libx264) | Universalmente compatible |
| **Profile** | High | Mejor compresión/calidad |
| **Level** | 4.1 | Compatible con dispositivos antiguos |
| **Preset** | medium | Balance entre velocidad y calidad |
| **CRF** | 23 | Calidad visualmente sin pérdida |
| **Pixel Format** | yuv420p | Requerido para autoplay iOS |
| **Codec de Audio** | AAC | Estándar para web |
| **Bitrate Audio** | 128kbps | Calidad suficiente para fondo |
| **Sample Rate** | 44100 Hz | Estándar CD quality |
| **Fast Start** | Enabled | Streaming instantáneo |

### 📦 Salida

```
public/videos/
├── home.mp4              ← ✅ Convertido de home.mov
├── fachada-espacios.mp4  ← ✅ Reconvertido a H.264
├── espacios.mp4          ← ✅ Ya compatible
├── habitaciones.mp4      ← ✅ Ya compatible
├── r1.mp4                ← ✅ Ya compatible
├── r2.mp4                ← ✅ Ya compatible
├── restaurante.mp4       ← ✅ Ya compatible
├── aliados.mp4           ← ✅ Ya compatible
└── backup_YYYYMMDD_HHMMSS/  ← 💾 Backups originales
```

### 🛡️ Seguridad

- **Backups Automáticos**: Todos los archivos originales se guardan en `backup_YYYYMMDD_HHMMSS/`
- **No Destructivo**: El script nunca elimina archivos sin backup
- **Reversible**: Puedes restaurar los originales desde la carpeta de backup

### 📊 Ejemplo de Salida

```
╔════════════════════════════════════════════════════════╗
║   Conversión de Videos para iOS + Android            ║
╚════════════════════════════════════════════════════════╝

📁 Directorio de videos: /path/to/public/videos
💾 Backup en: /path/to/public/videos/backup_20250129_143022

🎬 Convirtiendo videos incompatibles...

🔄 Convirtiendo: home.mov
   ✓ Backup creado
   ✓ Conversión completada
   📊 Tamaño original: 26M → Nuevo: 8.2M

🔄 Convirtiendo: fachada-espacios.mp4
   ✓ Backup creado
   ✓ Conversión completada
   📊 Tamaño original: 25M → Nuevo: 7.8M

╔════════════════════════════════════════════════════════╗
║   ✅ Conversión Completada                            ║
╚════════════════════════════════════════════════════════╝
```

### 🔍 Verificación Post-Conversión

Verifica que los videos se convirtieron correctamente:

```bash
# Ver información detallada de los videos
ffprobe -v error -show_entries stream=codec_name,profile,pix_fmt \
  -of default=noprint_wrappers=1 public/videos/home.mp4

# Debería mostrar:
# codec_name=h264
# profile=High
# pix_fmt=yuv420p
```

### 🧪 Testing

**1. Prueba Local:**

```bash
npm run dev
# Abre en navegador y verifica que todos los videos se reproducen
```

**2. Prueba en Dispositivos Reales:**

- [ ] iPhone 13 con Chrome
- [ ] iPhone 13 con Safari  
- [ ] iPad con Chrome
- [ ] Android con Chrome
- [ ] Desktop Chrome/Safari/Firefox

### ⚠️ Notas Importantes

1. **Tiempo de Conversión**: Cada video toma 30-120 segundos dependiendo del tamaño
2. **Espacio en Disco**: Asegúrate de tener al menos 2x el tamaño total de los videos
3. **Calidad**: CRF 23 mantiene calidad visual idéntica al original
4. **Tamaño**: Esperado 60-70% del tamaño original (con mejor compatibilidad)

### 🐛 Troubleshooting

#### Error: "ffmpeg no está instalado"

```bash
# Instala FFmpeg según tu sistema operativo (ver Requisitos Previos)
brew install ffmpeg
```

#### Error: "Permission denied"

```bash
# Da permisos de ejecución al script
chmod +x scripts/convert-videos-to-web-format.sh
```

#### Error: "No such file or directory"

```bash
# Asegúrate de estar en la raíz del proyecto
cd /Users/esauguerra/Desktop/colorads/calle-flora
pwd  # Debe mostrar el path completo al proyecto
```

#### Los videos no se reproducen después de la conversión

1. Limpia la caché del navegador
2. Verifica que las referencias en el código apunten a `.mp4` (no `.mov`)
3. Verifica la consola del navegador por errores

### 📚 Referencias

- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [H.264 Encoding Guide](https://trac.ffmpeg.org/wiki/Encode/H.264)
- [WebKit Video Policies](https://webkit.org/blog/6784/new-video-policies-for-ios/)
- [Chrome Autoplay Policy](https://developer.chrome.com/blog/autoplay/)

### 💡 Tips Adicionales

**Reducir tamaño aún más:**
```bash
# Cambia CRF de 23 a 26-28 (menor calidad, menor tamaño)
# En el script, cambia: -crf 23  →  -crf 26
```

**Mayor calidad:**
```bash
# Cambia CRF de 23 a 20-21 (mayor calidad, mayor tamaño)
# En el script, cambia: -crf 23  →  -crf 21
```

**Conversión más rápida:**
```bash
# Cambia preset de medium a fast
# En el script, cambia: -preset medium  →  -preset fast
```

---

**Última actualización:** 2025-01-29  
**Versión:** 1.0.0  
**Autor:** AI Senior Developer

