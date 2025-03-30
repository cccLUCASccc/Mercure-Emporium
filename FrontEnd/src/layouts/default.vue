<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Objets à collectionner',
    to: '#',
    children: [
      {
        label: 'Cartes à collectionner',
        description: 'Ensemble de cartes à jouer de collection.',
      },
      {
        label: 'Poupées et figurines',
        description: 'Ensemble de poupées et figurines',
      },
      {
        label: "Bandes dessinées",
        description: 'Ensemble de bd de collection.'
      }
    ]
  },
  {
    label: 'Décoration intérieure',
    to: '#',
    children: [
      {
        label: 'Verre et crital',
        description: 'Vases, statues, ...',
      },
      {
        label: 'Céramiques',
        description: 'Céramiques européennes, céramiques asiatiques, ...',
      },
      {
        label: 'Miroirs',
        description: 'fer forgé, verre de Murano, bambou, ...',
      },
      {
        label: 'Mobilier',
        description: 'Fauteuils, tables et chaises, consoles, ...',
      }
    ]
  },
  {
    label: 'Décoration exterieure',
    children: [
      {
        label: 'Mobilier',
        description: 'Bancs, tables et chaises, ...',
      },
      {
        label: 'Statues',
        description: 'Lampadaires, phares, ...',
      }
    ]
  },
  {
    label: 'Art de la table',
    to: '#',
    children: [
        {
            label: 'Services à diner',
        },
        {
            label: 'Services à café',
        },
        {
            label: 'Services à couverts',
        },
    ]
  },
  {
    label:'Register',
    to:"#",
    class: 'register-item'
  }
])
</script>

<template>
    <header>
        <UNavigationMenu 
        :items='items'
        highlight
        highlight-color="primary" 
        class="data-[orientation=horizontal]:border-b border-(--ui-border) data-[orientation=horizontal]:w-full justify-center data-[orientation=vertical]:w-48"
        />
    </header>
    <slot/>
    <footer>
        <USeparator label="footer"/>
    </footer>
</template>