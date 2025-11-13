# 🚀 Guía de Configuración para Vercel

## Problema Identificado
El proyecto necesita variables de entorno de Contentful para funcionar correctamente en Vercel.

## ✅ Correcciones Aplicadas

### 1. **next.config.ts** - Configuración de imágenes remotas
Se agregó soporte para imágenes de Contentful:
```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.ctfassets.net',
    },
    {
      protocol: 'https',
      hostname: 'downloads.ctfassets.net',
    },
  ],
}
```

### 2. **lib/api.ts** - Manejo robusto de errores
- Logging detallado con prefijo `[Contentful]`
- Validación explícita de variables de entorno
- Manejo de errores de GraphQL
- Fallbacks seguros para evitar crashes

### 3. **Páginas de habitaciones** - Modo dinámico
- `app/habitaciones/page.tsx`: `export const dynamic = 'force-dynamic'`
- `app/habitaciones/[slug]/page.tsx`: `export const dynamic = 'force-dynamic'`
- Try/catch defensivo en data fetching
- Fallback UI cuando no hay datos

## 📋 Pasos para Deploy en Vercel

### 1. Variables de Entorno Requeridas

En el panel de Vercel (Settings → Environment Variables), agrega:

| Variable | Valor | Entornos |
|----------|-------|----------|
| `CONTENTFUL_SPACE_ID` | Tu Space ID de Contentful | Production, Preview, Development |
| `CONTENTFUL_ACCESS_TOKEN` | Tu Access Token de Contentful | Production, Preview, Development |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Tu API Key de Google Maps | Production, Preview, Development |

**¿Dónde encontrar estos valores?**

#### Contentful:
1. Ve a [app.contentful.com](https://app.contentful.com)
2. Selecciona tu Space
3. Settings → API keys
4. **Content Delivery API - access token** (NO usar Preview API)
5. Copia:
   - Space ID
   - Content Delivery API - access token

#### Google Maps:
1. Ve a [console.cloud.google.com](https://console.cloud.google.com)
2. APIs & Services → Credentials
3. Copia tu API Key

### 2. Configurar en Vercel

```bash
# Opción 1: Desde la UI de Vercel
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega cada variable con su valor
4. Selecciona todos los entornos (Production, Preview, Development)
5. Guarda

# Opción 2: Desde Vercel CLI
vercel env add CONTENTFUL_SPACE_ID
vercel env add CONTENTFUL_ACCESS_TOKEN
vercel env add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
```

### 3. Redeploy

Después de agregar las variables, necesitas hacer un nuevo deploy:

```bash
# Opción 1: Desde la UI
Ve a Deployments → Click en los 3 puntos → Redeploy

# Opción 2: Trigger con git push
git commit --allow-empty -m "chore: trigger redeploy with env vars"
git push origin main

# Opción 3: Desde Vercel CLI
vercel --prod
```

## 🔍 Verificar que Funciona

1. **Logs de Build**: Verifica que no haya errores de "CONTENTFUL_SPACE_ID is not set"
2. **Logs de Runtime**: Ve a Vercel → Deployments → Tu deploy → Logs
3. **Página de habitaciones**: Visita `tu-dominio.vercel.app/habitaciones`
   - ✅ Debe mostrar las habitaciones
   - ❌ Si muestra "No hay habitaciones disponibles", verifica los logs

## 🐛 Troubleshooting

### Error: "Contentful environment variables not set"
**Causa**: Variables no configuradas en Vercel  
**Solución**: Agrega las variables en Settings → Environment Variables y redeploy

### Error: "GraphQL request failed: 401"
**Causa**: Access Token incorrecto o expirado  
**Solución**: Verifica que usas el **Content Delivery API token** (NO Preview)

### Error: "GraphQL request failed: 404"
**Causa**: Space ID incorrecto  
**Solución**: Copia el Space ID exacto desde Contentful Settings → API keys

### Imágenes no cargan
**Causa**: Dominio no autorizado en next.config.ts  
**Solución**: Ya está configurado con `images.ctfassets.net` y `downloads.ctfassets.net`

### Página en blanco sin errores
**Causa**: Puede que el contenido no exista en Contentful  
**Solución**: 
1. Verifica en Contentful que tienes contenido publicado
2. Revisa los logs de Vercel para ver qué responde la API

## 📚 Documentación Adicional

- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Contentful API Keys](https://www.contentful.com/developers/docs/references/authentication/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

## ✨ Mejoras Implementadas

- ✅ Configuración de dominios remotos para imágenes de Contentful
- ✅ Logging detallado para debugging en producción
- ✅ Manejo robusto de errores de red y API
- ✅ Fallback UI cuando no hay datos disponibles
- ✅ Modo dinámico para páginas que dependen de Contentful
- ✅ Validación explícita de variables de entorno
- ✅ Try/catch defensivo en todas las llamadas a API

---

**Última actualización**: 2025-01-13  
**Versión de Next.js**: 15.3.3

