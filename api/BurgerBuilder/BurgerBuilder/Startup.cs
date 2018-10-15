using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using AutoMapper;
using BurgerBuilder.Infrastructure;
using BurgerBuilder.Infrastructure.Consul;
using BurgerBuilder.Persistence;
using Consul;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.Swagger;

namespace BurgerBuilder
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.Configure<Settings>(options => {
                options.ApiKey = Configuration.GetSection("ApiKey").Value;
            });

            services.Configure<MongoSettings>(Configuration.GetSection("MongoInfo"));         
 
            
            services.AddScoped<MongoDbContext>();
            services.AddScoped<IBurgerOrderRepository, BurgerOrderRepository>();
            services.AddScoped<IConsulProvider, ConsulProvider>();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1" });
                c.AddSecurityDefinition("ApiKey", new ApiKeyScheme { In = "header", Description = "Api", Name = Constants.SecretHeader, Type = "apiKey" });
                c.AddSecurityRequirement(new Dictionary<string, IEnumerable<string>> {
                    { "ApiKey", Enumerable.Empty<string>() }
                });
            });

            services.AddCors();

            services.AddAutoMapper();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            app.UseCors(builder => builder.WithOrigins("http://localhost:3000")
                    .AllowAnyHeader().AllowAnyMethod());


            app.UseMvc();
        }
    }
}
