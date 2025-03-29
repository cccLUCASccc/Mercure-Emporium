// Copyright (C) 2025 Cloes Lucas


import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
