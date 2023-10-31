1.Create New Service and use the service as Data in Angular. Pass Data from service to Components
2. Understand the Hierarchical Injection of the Services and sharing of instances in the angular. We need to provide same instance and app module level not on component level. Highest Order : App Module - then same instances will be shared across all other components and services

app module - highest level ( same instances available for all components + all services)
app component - 2nd highest level ( same instances avialable for all components only not services)
child component -Same instances available at components level
3. Component Communication using Services
4. Injecting Service into another Services
5. Making the cross component communication using the services by event emitter in the angular.
