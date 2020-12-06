<template>
    <div id="footer">

      <footer class="page-footer font-small pt-4">

        <!-- Footer Links -->
        <div class="container-fluid text-center text-md-left bg-secundary __all">

          <!-- Grid row -->
          <div class="row">

            <!-- Grid column -->
            <div class="col-sm mt-md-0 mb-3">

              <!-- Content -->
              <h5 class="d-flex justify-content-center">Follow us</h5>
              <ul class="align-left">
                  <dt class="my-3"><i class="ico-media px-5 ico-fcb ico-1 color-primary"></i>Facebook</dt>
                  <dt class="my-3"><i class="ico-media px-5 ico-twt ico-1 color-primary"></i>Twitter</dt>
                  <dt class="my-3"><i class="ico-media px-5 ico-int ico-1 color-primary"></i>Instagram</dt>
                  <dt class="my-3"><i class="ico-media px-5 ico-lin ico-1 color-primary"></i>Linkein</dt>
              </ul>

            </div>
            <!-- Grid column -->

            <!-- <hr class="clearfix w-100 d-md-none pb-3"> -->

            <!-- Grid column -->
            <div class="col-sm mb-md-0 mb-3">

              <!-- Links -->
              <h5 class="d-flex justify-content-center">Webpage</h5>

              <ul class="align-left">

                <dt class="my-3"><a href="#Home"><i class="ico-awesome px-5 ico-heart ico-1 color-primary"></i>Home</a></dt>
                <dt class="my-3"><a href="#Services"><i class="ico-awesome px-5 ico-cogs ico-1 color-primary"></i>Services</a></dt>
                <dt class="my-3"><a href="#News"><i class="ico-awesome px-5 ico-web ico-1 color-primary"></i>News</a></dt>
                <dt class="my-3"><a href="#Team"><i class="ico-awesome px-5 ico-users ico-1 color-primary"></i>Team</a></dt>           

              </ul>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-sm mb-md-0 mb-3">

              <!-- Links -->
              <h5 class="d-flex justify-content-center">Development</h5>

              <ul class="align-left">
                  <dt class="my-3"><a href="https://github.com/fuf-herNef/Moubi"><i class="ico-dev px-5 ico-git ico-1 color-primary"></i>Repository</a></dt>
                  <dt class="my-3"><a href="https://github.com/fuf-herNef/Moubi/projects/1"><i class="ico-dev px-5 ico-linux ico-1 color-primary"></i>Project Scrum</a></dt>
                  <dt class="my-3"><a href="https://github.com/fuf-herNef/Moubi/blob/main/README.md"><i class="ico-dev px-5 ico-html ico-1 color-primary"></i>Project Doc</a></dt>
                  <dt class="my-3"><a href="https://github.com/fuf-herNef/Moubi/blob/main/src/static/css/README.md"><i class="ico-dev px-5 ico-css ico-1 color-primary"></i>CSS Doc</a></dt>
              </ul>

            </div>
            <!-- Grid column -->

          </div>
          <!-- Grid row -->

        </div>
        <!-- Footer Links -->

        <!-- Copyright -->
          <div class="footer-end bg-dark __all">	
              <div id="dev-footer"><i class="ico-awesome ico-heart px-5 color-complementary __all"></i></div>
          </div>
        <!-- Copyright -->

      </footer>

    </div>
</template>

<script>
export default {
    name: "ComponenteFooter"
}
</script>

<style scoped>  
    footer {
        background-color: #49a078;
        color: white;
    }
    footer a {
      color: white;
    }

</style>
