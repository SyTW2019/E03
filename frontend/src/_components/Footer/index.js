import React from 'react'
import { FormattedMessage } from 'react-intl'

import Wrapper from './Wrapper'
import messages from './messages'

function Footer() {
  return (
    <div class="d-flex border-top mt-4 align-items-center justify-content-around bg-light">
      <div class="bd-highlight mt-3 mb-5">
        <div class="mb-1 text-secondary">EVENTSFINDER</div>

        <div>
          Esta página web le permite crear eventos, apuntarse a ellos, <br />
          compartirlos, así como ver los eventos próximos y <br />
          acceder a una extensa comunidad de eventos.
        </div>
      </div>

      <div class="bd-highlight mt-3 mb-5 pb-4 mr-5 pr-5">
        <div class="mb-1 text-secondary">ENLACE AL PROYECTO</div>

        <div class="d-flex align-items-center">
          <img
            src="../../../images/github.png"
            alt="logoGitHub"
            class="img-responsive img-fluid"
            height="30"
            width="30"
          />

          <a href="https://github.com/SyTW2019/E03" class="ml-1">
            GitHub del Proyecto
          </a>
        </div>
      </div>

      <div class="bd-highlight mt-3 mb-2">
        <div class="mb-1 text-secondary">CONTACTO</div>

        <div class="d-flex align-items-center">
          <img
            src="../../../images/correo.jpg"
            alt="logoCorreo"
            class="img-responsive img-fluid ml-1"
            height="15"
            width="15"
          />

          <a href="alu0101061672@ull.edu.es" class="pl-2 small">
            alu0101061672@ull.edu.es
          </a>
        </div>

        <div class="d-flex align-items-center">
          <img
            src="../../../images/correo.jpg"
            alt="logoCorreo"
            class="img-responsive img-fluid ml-1"
            height="15"
            width="15"
          />

          <a href="alu0101029993@ull.edu.es" class="pl-2 small">
            alu0101029993@ull.edu.es
          </a>
        </div>

        <div class="d-flex align-items-center">
          <img
            src="../../../images/correo.jpg"
            alt="logoCorreo"
            class="img-responsive img-fluid ml-1"
            height="15"
            width="15"
          />

          <a href="alu0100954609@ull.edu.es" class="pl-2 small">
            alu0100954609@ull.edu.es
          </a>
        </div>

        <div class="d-flex align-items-center">
          <img
            src="../../../images/correo.jpg"
            alt="logoCorreo"
            class="img-responsive img-fluid ml-1"
            height="15"
            width="15"
          />

          <a href="alu0101028026@ull.edu.es" class="pl-2 small">
            alu0101028026@ull.edu.es
          </a>
        </div>

        <div class="d-flex align-items-center">
          <img
            src="../../../images/correo.jpg"
            alt="logoCorreo"
            class="img-responsive img-fluid ml-1"
            height="15"
            width="15"
          />

          <a href="alu0101045603@ull.edu.es" class="pl-2 small">
            alu0101045603@ull.edu.es
          </a>
        </div>
      </div>
    </div>
    // <Wrapper>

    // <section>
    //     <FormattedMessage {...messages.message} />
    // </section>

    // </Wrapper>
  )
}

export default Footer
