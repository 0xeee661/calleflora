# 📦 Mock Data - Guía de Uso

## 🎯 Descripción

Este directorio contiene datos mock (simulados) para desarrollo y testing de componentes que requieren datos de proyectos inmobiliarios.

## 📋 Archivos Disponibles

### `onSaleProjectsMock.ts`

Contiene 6 proyectos mock completamente tipados con:
- ✅ **Estructura completa** de GraphQL types
- ✅ **Datos realistas** con coordenadas de Medellín
- ✅ **Imágenes de Unsplash** para visualización
- ✅ **Utilidades helper** para filtrado

## 🚀 Uso en Componentes

### Ejemplo 1: Uso Directo

```typescript
import { MOCK_ON_SALE_PROJECTS } from '@/mocks/onSaleProjectsMock'
import LocationMapHome from '@/components/Home/LocationMap'

export default function Page() {
  return <LocationMapHome onSaleProjects={MOCK_ON_SALE_PROJECTS} />
}
```

### Ejemplo 2: Con Filtrado por Ciudad

```typescript
import { getMockProjectsByCity } from '@/mocks/onSaleProjectsMock'

const medellinProjects = getMockProjectsByCity('Medellín')
```

### Ejemplo 3: Con Filtrado por Tipo

```typescript
import { getMockProjectsByType } from '@/mocks/onSaleProjectsMock'

const apartments = getMockProjectsByType('Apartamento')
```

### Ejemplo 4: Con Filtrado por Precio

```typescript
import { getMockProjectsByPriceRange } from '@/mocks/onSaleProjectsMock'

const affordableProjects = getMockProjectsByPriceRange(0, 400000000)
```

## 📊 Datos Incluidos

| Proyecto | Ciudad | Tipo | Precio | Coordenadas |
|----------|--------|------|--------|-------------|
| Edificio Central Park | Medellín | Apartamento | $450.000.000 | 6.2088, -75.5686 |
| Torres del Parque | Medellín | Casa | $680.000.000 | 6.2476, -75.5658 |
| Residencias El Tesoro | Envigado | Apartamento | $320.000.000 | 6.1701, -75.5873 |
| Ciudad del Río Living | Medellín | Loft | $280.000.000 | 6.2351, -75.5776 |
| Laureles Premium | Medellín | Apartamento | $380.000.000 | 6.2443, -75.5902 |
| Sabaneta Garden | Sabaneta | Casa | $550.000.000 | 6.1518, -75.6169 |

## 🎨 Constantes Útiles

```typescript
import { 
  MOCK_CITIES, 
  MOCK_PROPERTY_TYPES, 
  MOCK_PRICE_RANGES 
} from '@/mocks/onSaleProjectsMock'

// MOCK_CITIES = ['Medellín', 'Envigado', 'Sabaneta']
// MOCK_PROPERTY_TYPES = ['Apartamento', 'Casa', 'Loft']
// MOCK_PRICE_RANGES = [...]
```

## ⚠️ Importante

- **Solo para desarrollo y testing**
- No usar en producción
- Las imágenes son de Unsplash y pueden cambiar
- Los datos son ficticios pero realistas

## 🔧 Mantenimiento

Para agregar más proyectos mock, sigue la estructura existente y asegúrate de incluir todas las propiedades requeridas por los tipos de GraphQL.

