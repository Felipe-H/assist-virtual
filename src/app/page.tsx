"use client";

import Image from "next/image"
import Link from "next/link"
import {CheckCircle, ChevronDown, Heart, MessageCircle, Phone, Smile, Star, Users} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
      <div className="flex min-h-screen flex-col items-center w-full bg-[#f5f5f5]">
        <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b border-purple-200">
          <div className="container mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8 max-w-7xl relative justify-between">

            {/* LOGO */}
            <div className="flex items-center gap-2">
              <Image
                  src="/images/logo1.png"
                  alt="Logo Ana Julia"
                  width={200}
                  height={40}
                  className="object-contain"
              />
            </div>

            {/* MENU E BOTÃO - DESKTOP */}
            <div className="hidden md:flex items-center gap-10">
              <nav className="flex gap-6">
                <Link href="#inicio" className="text-sm font-medium text-black hover:text-purple-700">Início</Link>
                <Link href="#quem-somos" className="text-sm font-medium text-black hover:text-purple-700">Quem Somos</Link>
                <Link href="#como-funciona" className="text-sm font-medium text-black hover:text-purple-700">Como Funciona</Link>
                <Link href="#atendimento" className="text-sm font-medium text-black hover:text-purple-700">Atendimento</Link>
                <Link href="#depoimentos" className="text-sm font-medium text-black hover:text-purple-700">Depoimentos</Link>
                <Link href="#atendimento-humanizado" className="text-sm font-medium text-black hover:text-purple-700">Atendimento humanizado</Link>
              </nav>

              <a
                  href="https://wa.me/5521982262570?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20conversa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-4 py-2 rounded-md transition-colors"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-white"
                >
                  <path d="M20.52 3.48A12.073 12.073 0 0 0 12.001 0C5.382 0 .001 5.372.001 11.99a11.9 11.9 0 0 0 1.65 6.006L0 24l6.185-1.627A11.94 11.94 0 0 0 12 23.981c6.62 0 12-5.372 12-11.99a11.94 11.94 0 0 0-3.48-8.511Zm-8.52 18.03a9.89 9.89 0 0 1-5.063-1.378l-.363-.215-3.67.966.982-3.574-.236-.367a9.875 9.875 0 0 1-1.524-5.252c0-5.458 4.445-9.899 9.91-9.899a9.86 9.86 0 0 1 7.008 2.905 9.84 9.84 0 0 1 2.902 6.993c0 5.457-4.444 9.901-9.91 9.901Zm5.411-7.473c-.296-.148-1.755-.867-2.027-.967-.273-.1-.472-.149-.671.15-.2.297-.771.967-.945 1.166-.173.198-.347.223-.644.074-.297-.15-1.256-.462-2.392-1.475-.883-.788-1.48-1.762-1.652-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.174.198-.298.297-.497.099-.198.05-.373-.025-.52-.074-.148-.671-1.622-.919-2.223-.242-.583-.49-.5-.67-.51l-.572-.01c-.198 0-.52.075-.792.373s-1.04 1.016-1.04 2.48 1.064 2.876 1.213 3.074c.148.198 2.093 3.197 5.074 4.484.709.305 1.263.486 1.695.621.712.226 1.36.194 1.872.118.571-.085 1.755-.717 2.003-1.41.247-.694.247-1.288.173-1.411-.075-.124-.272-.198-.568-.347Z" />
                </svg>
                Fale Conosco
              </a>
            </div>

            {/* BOTÃO MENU MOBILE */}
            <Button
                variant="outline"
                size="icon"
                className="md:hidden border-purple-300"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                   className="h-6 w-6">
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>

            {/* MENU MOBILE */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 right-4 bg-white border border-purple-200 shadow-lg rounded-md p-4 flex flex-col gap-4 z-50 md:hidden w-60">
                  <Link href="#inicio" onClick={() => setMobileMenuOpen(false)}>Início</Link>
                  <Link href="#quem-somos" onClick={() => setMobileMenuOpen(false)}>Quem Somos</Link>
                  <Link href="#como-funciona" onClick={() => setMobileMenuOpen(false)}>Como Funciona</Link>
                  <Link href="#atendimento" onClick={() => setMobileMenuOpen(false)}>Atendimento</Link>
                  <Link href="#depoimentos" onClick={() => setMobileMenuOpen(false)}>Depoimentos</Link>
                  <Link href="#atendimento-humanizado" onClick={() => setMobileMenuOpen(false)}>Atendimento Humanizado</Link>
                  <a
                      href="https://wa.me/5521982262570?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20conversa."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 font-semibold"
                  >
                    Fale Conosco
                  </a>
                </div>
            )}
          </div>
        </header>

        <main className="flex-1 w-full">
          {/* Hero Section */}
          <section id="inicio" className="w-full relative">
            <div className="relative w-full min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[900px]">

            <Image
                  src="/images/newbanner.jpg"
                  alt="NOVA Assistência Virtual"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* O conteúdo do banner já está na imagem, então não precisamos adicionar texto aqui */}
              </div>

              {/* Indicador de scroll para mostrar que há mais conteúdo abaixo */}
              <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
                <a href="#quem-somos" className="flex flex-col items-center text-white">
                  <span className="text-sm mb-2">Conheça nossos serviços</span>
                  <div className="bg-white/30 backdrop-blur-sm p-3 rounded-full">
                    <ChevronDown className="h-6 w-6" />
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Atendimento */}
          <section id="atendimento" className="w-full py-16 bg-gradient-to-b from-white to-purple-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <h2 className="text-4xl font-bold text-center mb-4 text-purple-800">Como será seu atendimento?</h2>
              <p className="text-center mb-12 text-black">
                Entenda o diferencial da <span className="italic font-bold text-purple-700">Assistência Virtual</span>.
              </p>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-purple-100">
                <div className="flex flex-col items-center text-center space-y-12">

                  {/* BLOCO 01 */}
                  <div>
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                        <span className="font-bold text-purple-700">01</span>
                      </div>
                      <h3 className="text-xl font-bold text-purple-800">SCRIPT PERSONALIZADO</h3>
                    </div>
                    <p className="text-black max-w-2xl mx-auto">
                      Vamos <span className="font-bold text-purple-700">ajustar</span> ou{" "}
                      <span className="font-bold text-purple-700">criar</span> um SCRIPT de atendimento personalizado
                      para melhorar sua comunicação com o paciente e taxa de conversão.
                    </p>
                  </div>

                  {/* BLOCO 02 */}
                  <div>
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                        <span className="font-bold text-purple-700">02</span>
                      </div>
                      <h3 className="text-xl font-bold text-purple-800">ESTRATÉGIAS</h3>
                    </div>
                    <p className="text-black max-w-2xl mx-auto">
                      Aplicação de Técnicas de Escassez, Gatilhos mentais, Proximidade com o paciente,
                      Provas sociais e Atendimento Humanizado.
                    </p>
                  </div>

                  {/* BLOCO 03 */}
                  <div>
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                        <span className="font-bold text-purple-700">03</span>
                      </div>
                      <h3 className="text-xl font-bold text-purple-800">FOLLOW-UP e AGILIDADE</h3>
                    </div>
                    <p className="text-black max-w-2xl mx-auto">
                      Acompanhamento da lead com <span className="font-bold text-purple-700">Follow-up</span>,
                      Respostas rápidas e Utilização de áudios para atrair a atenção do cliente.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Quem Somos */}
          <section id="quem-somos" className="w-full py-16 bg-gradient-to-b from-purple-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              {/* Título da seção */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-purple-800">Quem somos nós?</h2>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8 border border-purple-100 space-y-12">

                {/* Bloco Ana Júlia */}
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-purple-700 mb-4">Ana Júlia</h3>
                    <p className="mb-4 text-black">
                      CEO da empresa com ampla experiência com médicos, dentistas e profissionais da saúde, mais de
                      50 consultórios e clínicas atendidos. Especialista em gatilhos mentais e estratégias de agendamentos
                    </p>
                  </div>
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-200">
                    <Image
                        src="/images/anajulia4.jpg"
                        alt="Ana Júlia"
                        width={192}
                        height={192}
                        className="object-cover"
                    />
                  </div>
                </div>

                {/* Bloco Isabella Borba */}
                <div className="flex flex-col md:flex-row gap-8 items-center border-t border-purple-100 pt-8">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-purple-700 mb-4">Isabella Borba</h3>
                    <p className="mb-4 text-black">
                      Sócia, Social Media e Assistente Virtual. Ampla experiência em redes sociais, estratégia de vendas e atendimento ao público.
                    </p>
                    <a
                        href="https://www.behance.net/isabellaborba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="italic underline text-purple-700 hover:text-purple-900"
                    >
                      Clique aqui para acessar meu Portfólio individual.
                    </a>
                  </div>
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-200">
                    <Image
                        src="/images/isabella.jpg"
                        alt="Isabella Borba"
                        width={192}
                        height={192}
                        className="object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* NOVA SEÇÃO: Atendimento Humanizado */}
          <section id="atendimento-humanizado" className="w-full py-16 bg-gradient-to-b from-white to-purple-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-purple-800">O Poder do Atendimento Humanizado</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Mais do que um diferencial, o atendimento humanizado é a essência que transforma a experiência do
                  paciente e potencializa os resultados do seu consultório.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-purple-200">
                {/* Introdução */}
                <div className="mb-10 text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-10 w-10 text-purple-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800 mb-4">O que é Atendimento Humanizado?</h3>
                  <p className="text-gray-700 max-w-3xl mx-auto">
                    É uma abordagem que coloca o ser humano no centro do processo, reconhecendo suas necessidades
                    emocionais, além das técnicas. Vai além do simples atendimento, criando uma conexão genuína que
                    transmite segurança, empatia e confiança desde o primeiro contato.
                  </p>
                </div>

                {/* Cards de benefícios */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <Card className="border border-purple-200 hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                          <Users className="h-7 w-7 text-purple-700" />
                        </div>
                        <h4 className="text-xl font-bold text-purple-800 mb-2">Fidelização</h4>
                        <p className="text-gray-700">
                          Pacientes que se sentem acolhidos e valorizados retornam e recomendam seus serviços, criando uma
                          base sólida de clientes fiéis.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-purple-200 hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                          <MessageCircle className="h-7 w-7 text-purple-700" />
                        </div>
                        <h4 className="text-xl font-bold text-purple-800 mb-2">Comunicação Eficaz</h4>
                        <p className="text-gray-700">
                          Estabelece canais claros de comunicação, reduzindo mal-entendidos e aumentando a satisfação do
                          paciente com o serviço.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-purple-200 hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                          <Smile className="h-7 w-7 text-purple-700" />
                        </div>
                        <h4 className="text-xl font-bold text-purple-800 mb-2">Experiência Positiva</h4>
                        <p className="text-gray-700">
                          Transforma momentos de ansiedade em experiências positivas, criando memórias agradáveis
                          associadas ao seu consultório.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Resultados */}
                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg border border-purple-100">
                  <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">Resultados Comprovados</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4">
                      <div className="text-3xl font-bold text-purple-700 mb-2">+40%</div>
                      <p className="text-sm text-gray-700">Aumento na taxa de retorno de pacientes</p>
                    </div>

                    <div className="p-4">
                      <div className="text-3xl font-bold text-purple-700 mb-2">+65%</div>
                      <p className="text-sm text-gray-700">Aumento nas recomendações e indicações</p>
                    </div>

                    <div className="p-4">
                      <div className="text-3xl font-bold text-purple-700 mb-2">-30%</div>
                      <p className="text-sm text-gray-700">Redução em cancelamentos de última hora</p>
                    </div>

                    <div className="p-4">
                      <div className="text-3xl font-bold text-purple-700 mb-2">+85%</div>
                      <p className="text-sm text-gray-700">Satisfação geral dos pacientes</p>
                    </div>
                  </div>
                </div>

                {/* Citação */}
                <div className="mt-10 text-center">
                  <blockquote className="italic text-xl text-gray-700 max-w-3xl mx-auto">
                    "O atendimento humanizado não é apenas uma estratégia de negócio, é um compromisso com o bem-estar e a
                    dignidade de cada pessoa que confia em nossos serviços."
                  </blockquote>
                  <div className="mt-4 font-semibold text-purple-800">— Equipe NOVA Assistência Virtual</div>
                </div>
              </div>

              {/* CTA */}
            </div>
          </section>


          {/* Como Funciona */}
          <section id="como-funciona" className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Como funciona?</h2>
              <div className="bg-gradient-to-r from-purple-50 to-white p-8 rounded-lg shadow-sm border border-purple-100">
                <div className="text-center space-y-4 mb-12">
                  <p className="text-base text-purple-700 font-medium text-lg">
                    O atendimento humanizado proporciona:
                  </p>
                  <p className="text-lg md:text-xl text-black font-semibold max-w-2xl mx-auto">
                    Uma experiência personalizada, comunicação eficaz e construção de relacionamentos sólidos com os clientes.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 12V22H4V12"
                        stroke="#9333ea"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M22 7H2V12H22V7Z"
                        stroke="#9333ea"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M12 22V7" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
                        stroke="#9333ea"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
                        stroke="#9333ea"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                  </svg>

                  <p className="text-lg font-bold text-purple-700 mt-4 mb-2">
                    Isso tudo é personalizado de acordo com a preferência de cada cliente.
                  </p>
                  <p className="text-black mb-2 font-medium text-lg">Entretanto todos atendimentos possuem o mesmo objetivo:</p>
                  <p className="text-xl font-bold text-purple-800 text-center">
                    Entregar excelência e fazer que seus clientes possuam uma experiência única desde o primeiro contato.
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* Depoimentos */}
          <section id="depoimentos" className="w-full py-16 bg-purple-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <div className="flex justify-center mb-2">
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="mx-2 px-3 py-1 border border-purple-200 rounded-full text-xs bg-white">FEEDBACK</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
                Depoimento de clientes
              </h2>

              <div className="space-y-8">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/4 flex justify-center mb-4 md:mb-0 flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-purple-300 mb-2">
                      <Image
                          src="/images/karina2.jpg"
                          alt="Dra Karina Moura"
                          width={96}
                          height={96}
                          className="object-cover"
                      />
                    </div>
                    <div className="bg-black text-white p-2 rounded-lg text-xs text-center w-48">
                      <p className="font-bold">Dra Karina Moura</p>
                      <p>Fisioterapeuta</p>
                      <p>@drakarina.fisio</p>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <Card className="border-2 border-black rounded-xl bg-white">
                      <CardContent className="p-6 text-center">
                        <p className="text-black">
                          "Contratar essa equipe foi meu{" "}
                          <span className="font-bold text-purple-700">melhor investimento</span>, atendimento é{" "}
                          <span className="font-bold text-purple-700">prático, objetivo, rápido</span>, equipe muito boa e
                          resolve meus recibos e praticamente toda a minha vida profissional.{" "}
                          <span className="font-bold text-purple-700">Indico muito!</span>"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>


                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/4 flex justify-center mb-4 md:mb-0 flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-purple-300 mb-2">
                      <Image
                          src="/images/rafael.jpg" // Troque pelo caminho correto
                          alt="Dra Karina Moura"
                          width={96}
                          height={96}
                          className="object-cover"
                      />
                    </div>
                    <div className="bg-black text-white p-2 rounded-lg text-xs text-center w-48">
                      <p className="font-bold">Dr Rafael Mérola</p>
                      <p>Cirurgião Bucomaxilofacial</p>
                      <p>@dr.rafaelmerola</p>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <Card className="border-2 border-black rounded-xl bg-white">
                      <CardContent className="p-6 text-center">
                        <p className="text-black">
                          "Desde quando comecei a trabalhar com equipe da Ana,{" "}
                          <span className="font-bold text-purple-700">
                          minha vida profissional se tornou muito mais organizada!
                        </span>{" "}
                          Agora consigo realmente{" "}
                          <span className="font-bold text-purple-700">focar nas consultas e cirurgias</span> com
                          exclusividade! Fora que a <span className="font-bold text-purple-700">taxa de conversão</span>{" "}
                          aumentou consideravelmente! Super indico!"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

              </div>
            </div>
          </section>
          {/* CTA */}
          <section className="w-full py-16 bg-gradient-to-r from-purple-900 to-purple-600 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
              <h2 className="text-3xl font-bold mb-6">Pronto para transformar sua rotina profissional?</h2>
              <p className="mb-8 max-w-2xl mx-auto">
                Entre em contato agora mesmo e descubra como nossa assistência virtual pode otimizar seu tempo e aumentar
                seus resultados.
              </p>
              <div className="flex justify-center">
                <a
                    href="https://wa.me/5521982262570?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20conversa."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <Button className="bg-white text-purple-800 hover:bg-purple-100 font-bold text-lg px-8 py-6 flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-10 h-10 text-green-700"
                    >
                      <path d="M20.52 3.48A12.073 12.073 0 0 0 12.001 0C5.382 0 .001 5.372.001 11.99a11.9 11.9 0 0 0 1.65 6.006L0 24l6.185-1.627A11.94 11.94 0 0 0 12 23.981c6.62 0 12-5.372 12-11.99a11.94 11.94 0 0 0-3.48-8.511Zm-8.52 18.03a9.89 9.89 0 0 1-5.063-1.378l-.363-.215-3.67.966.982-3.574-.236-.367a9.875 9.875 0 0 1-1.524-5.252c0-5.458 4.445-9.899 9.91-9.899a9.86 9.86 0 0 1 7.008 2.905 9.84 9.84 0 0 1 2.902 6.993c0 5.457-4.444 9.901-9.91 9.901Zm5.411-7.473c-.296-.148-1.755-.867-2.027-.967-.273-.1-.472-.149-.671.15-.2.297-.771.967-.945 1.166-.173.198-.347.223-.644.074-.297-.15-1.256-.462-2.392-1.475-.883-.788-1.48-1.762-1.652-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.174.198-.298.297-.497.099-.198.05-.373-.025-.52-.074-.148-.671-1.622-.919-2.223-.242-.583-.49-.5-.67-.51l-.572-.01c-.198 0-.52.075-.792.373s-1.04 1.016-1.04 2.48 1.064 2.876 1.213 3.074c.148.198 2.093 3.197 5.074 4.484.709.305 1.263.486 1.695.621.712.226 1.36.194 1.872.118.571-.085 1.755-.717 2.003-1.41.247-.694.247-1.288.173-1.411-.075-.124-.272-.198-.568-.347Z" />
                    </svg>
                    Agendar uma conversa
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full bg-black text-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2 text-purple-300">NOVA</h3>
                <p className="text-sm">Assistência Virtual para Profissionais da Saúde</p>
              </div>

              <div className="flex flex-col items-center mb-4 md:mb-0">

                {/* Ícone e link do Instagram */}
                <a
                    href="https://www.instagram.com/avirtual.anaduarte/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-300 hover:text-purple-100 mb-2 transition-colors"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-300"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                  </svg>
                  <span className="text-sm font-medium">@assistencia.nova</span>
                </a>

                {/* Direitos autorais */}
                <p className="text-sm text-center">© 2024 NOVA Assistência Virtual. Todos os direitos reservados.</p>
              </div>

              <div className="flex items-center">
                <Phone className="mr-2 text-purple-300" />
                <div>
                  <p className="text-sm">(21) 982262570</p>
                  <p className="text-sm">av.contatonova@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}
