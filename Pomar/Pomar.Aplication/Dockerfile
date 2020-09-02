FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["Pomar.Aplication/Pomar.Aplication.csproj", "Pomar.Aplication/"]

RUN dotnet restore "Pomar.Aplication/Pomar.Aplication.csproj"
COPY . .
WORKDIR "/src/Pomar.Aplication"
RUN dotnet build "Pomar.Aplication.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Pomar.Aplication.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Pomar.Aplication.dll"]