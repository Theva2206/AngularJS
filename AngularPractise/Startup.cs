using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularPractise.Startup))]
namespace AngularPractise
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
