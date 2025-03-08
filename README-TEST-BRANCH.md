# Branch de Teste - Todos os Biomas Disponíveis

Este branch foi criado especificamente para testes, tornando todos os biomas acessíveis através de URLs diretas.

## Propósito

No branch principal, os biomas (exceto a Tundra) estão ocultos com o prefixo de underscore (`_`) em seus diretórios, tornando-os inacessíveis via URL direta. Neste branch de teste, todos os biomas estão disponíveis para visualização e teste.

## Biomas Disponíveis

Você pode acessar os seguintes biomas:

- **Tundra**: `/tundra`
- **Taiga**: `/taiga`
- **Floresta Temperada**: `/tforest`
- **Floresta Equatorial**: `/eforest`
- **Campos**: `/grasslands`
- **Savana**: `/savanna`
- **Deserto**: `/desert`
- **Oceano**: `/ocean`

## Como Testar

1. Clone este branch:

   ```
   git checkout feature/all-biomes-available
   ```

2. Inicie o servidor de desenvolvimento:

   ```
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

4. Na página inicial, você verá uma seção "Explore os Biomas" com cards para todos os biomas disponíveis.

5. Clique em qualquer bioma para visualizar sua página completa.

## Observações

- Este branch é apenas para testes e não deve ser mesclado diretamente ao branch principal.
- Os componentes dos biomas continuam nos diretórios originais com underscore (`_bioma/_components/`), apenas foram criadas páginas que importam esses componentes.
- Quando terminar os testes, volte ao branch principal:
  ```
  git checkout main
  ```

## Estrutura de Arquivos

Cada bioma segue esta estrutura:

```
src/app/
├── bioma/
│   └── page.tsx (importa componentes de src/app/_bioma/_components/)
└── _bioma/
    └── _components/
        ├── Hero.tsx
        ├── Biome.tsx
        ├── Animal.tsx
        ├── Actions.tsx
        └── References.tsx
```
