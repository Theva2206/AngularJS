using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularPractise.Controllers
{
    public class BasicController : Controller
    {
        // GET: Basic
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ViewModel()
        {
            return View();
        }
        public ActionResult Lesson3() {

            return View();
        }

        public ActionResult Create() {

            return View();
        }

        public ActionResult Filter() {

            return View();
        }
    }
}