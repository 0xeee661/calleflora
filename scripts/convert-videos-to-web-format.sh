#!/bin/bash

################################################################################
# Script de Conversión de Videos para Web (iOS + Android Compatible)
################################################################################
#
# Convierte videos a formato MP4 con codec H.264 optimizado para:
# - iPhone (Safari + Chrome)
# - Android (Chrome + Samsung Browser)
# - Autoplay en navegadores móviles
#
# Características:
# - Codec: H.264 (universalmente compatible)
# - Profile: High (mejor calidad/compresión)
# - Pixel Format: yuv420p (requerido para compatibilidad)
# - Fast Start: Metadatos al inicio (streaming rápido)
# - Audio: AAC 128kbps
#
################################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo -e "${RED}❌ Error: ffmpeg no está instalado${NC}"
    echo ""
    echo "Instala ffmpeg con Homebrew:"
    echo "  brew install ffmpeg"
    echo ""
    exit 1
fi

# Directory setup
VIDEOS_DIR="$(cd "$(dirname "$0")/../public/videos" && pwd)"
BACKUP_DIR="$VIDEOS_DIR/backup_$(date +%Y%m%d_%H%M%S)"

echo -e "${BLUE}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Conversión de Videos para iOS + Android            ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${YELLOW}📁 Directorio de videos: ${VIDEOS_DIR}${NC}"
echo -e "${YELLOW}💾 Backup en: ${BACKUP_DIR}${NC}"
echo ""

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Function to convert video
convert_video() {
    local input_file="$1"
    local output_file="$2"
    local filename=$(basename "$input_file")
    
    echo -e "${BLUE}🔄 Convirtiendo: ${filename}${NC}"
    
    # Backup original
    cp "$input_file" "$BACKUP_DIR/"
    echo -e "   ${GREEN}✓${NC} Backup creado"
    
    # Convert with optimal settings for mobile web
    ffmpeg -i "$input_file" \
        -c:v libx264 \
        -profile:v high \
        -level:v 4.1 \
        -preset medium \
        -crf 23 \
        -movflags +faststart \
        -pix_fmt yuv420p \
        -c:a aac \
        -b:a 128k \
        -ar 44100 \
        -y \
        "$output_file" \
        2>&1 | grep -E "Duration|time=|error" || true
    
    if [ $? -eq 0 ]; then
        echo -e "   ${GREEN}✓${NC} Conversión completada"
        
        # Show file sizes
        local original_size=$(du -h "$input_file" | cut -f1)
        local new_size=$(du -h "$output_file" | cut -f1)
        echo -e "   📊 Tamaño original: ${original_size} → Nuevo: ${new_size}"
    else
        echo -e "   ${RED}✗${NC} Error en conversión"
        return 1
    fi
    echo ""
}

# Convert problematic videos
echo -e "${YELLOW}🎬 Convirtiendo videos incompatibles...${NC}"
echo ""

# 1. Convert home.mov to home.mp4
if [ -f "$VIDEOS_DIR/home.mov" ]; then
    convert_video "$VIDEOS_DIR/home.mov" "$VIDEOS_DIR/home.mp4"
else
    echo -e "${YELLOW}⚠️  home.mov no encontrado (puede que ya esté convertido)${NC}"
    echo ""
fi

# 2. Reconvert fachada-espacios.mp4 (it's QuickTime format)
if [ -f "$VIDEOS_DIR/fachada-espacios.mp4" ]; then
    convert_video "$VIDEOS_DIR/fachada-espacios.mp4" "$VIDEOS_DIR/fachada-espacios-new.mp4"
    
    # Replace original with converted version
    mv "$VIDEOS_DIR/fachada-espacios-new.mp4" "$VIDEOS_DIR/fachada-espacios.mp4"
    echo -e "${GREEN}✓ fachada-espacios.mp4 actualizado con formato compatible${NC}"
    echo ""
else
    echo -e "${YELLOW}⚠️  fachada-espacios.mp4 no encontrado${NC}"
    echo ""
fi

# Optional: Re-encode all MP4s to ensure maximum compatibility
echo -e "${YELLOW}¿Deseas reconvertir TODOS los videos para máxima compatibilidad? (y/N)${NC}"
read -r response

if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    echo ""
    echo -e "${BLUE}🔄 Reconvirtiendo todos los videos...${NC}"
    echo ""
    
    for video in "$VIDEOS_DIR"/*.mp4; do
        if [ -f "$video" ]; then
            filename=$(basename "$video" .mp4)
            
            # Skip if it's a temp file
            if [[ "$filename" == *"-new"* ]]; then
                continue
            fi
            
            # Skip already converted files
            if [ -f "$BACKUP_DIR/$(basename "$video")" ]; then
                echo -e "${YELLOW}⏭️  Saltando $filename.mp4 (ya convertido)${NC}"
                continue
            fi
            
            temp_output="$VIDEOS_DIR/${filename}-new.mp4"
            convert_video "$video" "$temp_output"
            mv "$temp_output" "$video"
        fi
    done
fi

# Summary
echo ""
echo -e "${GREEN}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   ✅ Conversión Completada                            ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${BLUE}📋 Siguiente paso:${NC}"
echo ""
echo "1. Actualiza las referencias en el código:"
echo "   - Cambia /videos/home.mov → /videos/home.mp4"
echo ""
echo "2. Prueba en dispositivos:"
echo "   - iPhone 13 (Safari + Chrome)"
echo "   - Android (Chrome)"
echo ""
echo -e "${YELLOW}💾 Backups guardados en:${NC}"
echo "   $BACKUP_DIR"
echo ""
echo -e "${GREEN}✨ ¡Listo! Tus videos ahora son compatibles con iOS y Android${NC}"
echo ""

