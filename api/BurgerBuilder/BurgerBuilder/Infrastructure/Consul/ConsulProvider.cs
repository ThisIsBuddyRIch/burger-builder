using System;
using System.Linq;
using Consul;
using Microsoft.Extensions.Options;

namespace BurgerBuilder.Infrastructure.Consul
{
    public class ConsulProvider: IConsulProvider, IDisposable
    {

        private bool _disposed;
        private readonly IConsulClient client;
        private readonly string _mongoServiceName;
        
        public ConsulProvider(IOptions<MongoSettings> settings)
        {
            client = new ConsulClient(config => { config.Address = new Uri("http://localhost:8500"); });
            _mongoServiceName = settings.Value.ServiceName;
        }

        public MongoConnectionInfo GetMongo()
        {
            if (_disposed)
            {
                throw new ObjectDisposedException("Object consulClient have been disposed already");
            }

            var service = client.Catalog.Service(_mongoServiceName).Result.Response
                .First(x => x.ServiceName == _mongoServiceName);

            return new MongoConnectionInfo
            {
                Port = service.ServicePort.ToString(),
                Address = service.Address
            };
        }


        public void Dispose()
        {
            if (!_disposed)
            {
                client?.Dispose();
                _disposed = true;
            }
        }
    }
}