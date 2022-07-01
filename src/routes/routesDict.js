const routesDictionary = {
    login: {
      router: '/login',
      title: 'Login',
      moduleName: 'login'
    },
    register: {
      router: '/register',
      title: 'Registro',
      moduleName: 'register'
    },
    dashboard: {
      router: '/dashboard',
      title: 'Tablero',
      moduleName: 'tablero'
    },
    solutions: {
      router: '/soluciones',
      title: 'Soluciones',
      moduleName: 'soluciones'
    },
    contact: {
      router: '/contacto',
      title: 'Contacto',
      moduleName: 'contacto'
    },
    claims: {
      router: '/solicitudes',
      title: 'Solicitudes',
      moduleName: 'solicitudes'
    },
    claimDetails: {
      router: '/solicitudes/:id',
      title: 'Detalle de solicitud',
      moduleName: 'detalleSolicitudes'
    },
    specialForm: {
      router: '/especial',
      title: 'Formularios especiales',
      moduleName: 'especial'
    },
    account: {
      router: '/miCuenta',
      title: 'Mi cuenta',
      moduleName: 'miCuenta'
    }
}

export default routesDictionary;