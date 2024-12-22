----------------------------------------------------------------------------------
-- Company: 
-- Engineer: 
-- 
-- Create Date: 16.11.2024 01:50:50
-- Design Name: 
-- Module Name: testbench - Behavioral
-- Project Name: 
-- Target Devices: 
-- Tool Versions: 
-- Description: 
-- 
-- Dependencies: 
-- 
-- Revision:
-- Revision 0.01 - File Created
-- Additional Comments:
-- 
----------------------------------------------------------------------------------


library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.numeric_std;

-- Uncomment the following library declaration if using
-- arithmetic functions with Signed or Unsigned values
--use IEEE.NUMERIC_STD.ALL;

-- Uncomment the following library declaration if instantiating
-- any Xilinx leaf cells in this code.
--library UNISIM;
--use UNISIM.VComponents.all;

entity testbench is
end testbench;

architecture Behavioral of testbench is
    -- Component Declaration for UUT
    component rega
        port(
            relogio : in std_logic_vector(4 downto 0);
            sensorA, sensorB : in std_logic;
            OK : out std_logic
        );
    end component;
    -- Testbench signals
    signal relogio_tb : std_logic_vector(4 downto 0) := (others => '0');
    signal sensorA_tb, sensorB_tb, OK_tb, clk : std_logic := '0'; 
    -- Clock period Definition
    constant clk_period : time := 10 ns;
begin
    -- Instaciate UUT
    uut: rega port map(
        relogio => relogio_tb,
        sensorA => sensorA_tb,
        sensorB => sensorB_tb,
        OK => OK_tb
    );
    
    -- Clock Definition
    clk <= not clk after clk_period/2;
    
    -- Stimulus Process
    stim_proc_relogio: process
    begin
        wait for 100 ns;
            relogio_tb <= "00000" after 0 ns,
                          "00001" after 20 ns,
                          "00010" after 40 ns,
                          "00011" after 60 ns,
                          "00100" after 80 ns,
                          "00101" after 100 ns,
                          "00110" after 120 ns,
                          "00111" after 140 ns,
                          "01000" after 160 ns,
                          "01001" after 180 ns,
                          "01010" after 200 ns,
                          "01011" after 220 ns,
                          "01100" after 240 ns,
                          "01101" after 260 ns,
                          "01110" after 280 ns,
                          "01111" after 300 ns,
                          "10000" after 320 ns,
                          "10001" after 340 ns,
                          "10010" after 360 ns,
                          "10011" after 380 ns,
                          "10100" after 400 ns,
                          "10101" after 420 ns,
                          "10110" after 440 ns,
                          "10111" after 460 ns,
                          "11000" after 480 ns,
                          "11001" after 500 ns,
                          "11010" after 520 ns,
                          "11011" after 540 ns,
                          "11100" after 560 ns,
                          "11101" after 580 ns,
                          "11110" after 600 ns,
                          "11111" after 620 ns;
        wait;
    end process;
    
    stim_proc_sensors: process
    begin
        sensorA_tb <= '0'; sensorB_tb <= '0';
        wait for 5 ns;
        sensorB_tb<= '1';
        wait for 5 ns;
        sensorA_tb <= '1'; sensorB_tb <= '0';
        wait for 5 ns;
        sensorB_tb<= '1';
        wait for 5 ns;        
    end process;

end Behavioral;
