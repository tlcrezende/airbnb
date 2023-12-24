import { Controller } from "@hotwired/stimulus"
import { toggle} from 'el-transition'

export default class extends Controller {
  static targets = ['openUserMenu', 'userAuthLink'];

  connect() {
    this.openUserMenuTarget.addEventListener('click', this.toggleUserMenu)

    this.userAuthLinkTargets.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('modal-trigger').click()
      })
    })

    
  }

  toggleUserMenu() {
    toggle(document.getElementById('menu-dropdown-items'))
  }
}
